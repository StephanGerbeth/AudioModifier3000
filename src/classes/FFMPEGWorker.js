// eslint-disable-next-line import/no-webpack-loader-syntax
import Worker from 'worker-loader!../service/worker.js';
import { fromEvent, Subject, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import parseProgress from '@ffmpeg/ffmpeg/src/utils/parseProgress';
import Sine from '@/classes/Sine';
import Transferable from '@/classes/Transferable';

export const INITIALIZE = Symbol('initialize');
export const CONVERSION_START = Symbol('conversion_start');
export const CONVERSION_COMPLETE = Symbol('conversion_complete');
export const LOADING = Symbol('loading');
export const ERROR = Symbol('error');
export default class FFMPEGWorker {
  constructor () {
    this.ready = new ReplaySubject(1);
    this.start = new Subject();
    this.done = new Subject();
    this.info = new ReplaySubject(1);
    this.progress = new Subject();
    this.error = new ReplaySubject(1);
  }

  prepare () {
    const worker = new Worker();
    const messages = fromEvent(worker, 'message').pipe(map(e => e.data));
    messages.pipe(filter(data => data.type === 'ready')).subscribe((e) => {
      this.ready.next(worker);
    });
    messages.pipe(filter(data => data.type === 'stdout')).subscribe(({ data }) => {
      parseProgress(data, ({ ratio }) => { this.progress.next(ratio); });
    });
    messages.pipe(filter(data => data.type === 'error')).subscribe(({ data }) => {
      this.info.next(ERROR);
    });
    messages.pipe(filter(data => data.type === 'start')).subscribe(({ data }) => {
      this.start.next(data);
      this.info.next(CONVERSION_START);
    });
  }

  run (file) {
    this.info.next(INITIALIZE);
    this.ready.subscribe(async (worker) => {
      this.info.next(LOADING);
      const files = await loadFiles(file);
      const transferable = new Transferable(worker);
      transferable.publish(files);
      transferable.subscribe(([
        transferableFile
      ]) => {
        transferable.destroy();
        this.info.next(CONVERSION_COMPLETE);
        this.done.next(URL.createObjectURL(new Blob([
          transferableFile.data
        ], { type: 'video/mp4' })));
      });
    });
    this.prepare();
    return this;
  }
}

function loadFiles (file) {
  return Promise.all([
    file.getBuffer().then(async (data) => {
      return { name: file.name, type: await file.getMimeType(), data };
    }),
    { name: 'sine.wav', type: 'audio/wav', data: new Sine(file.duration).getBuffer() }
  ]);
}
