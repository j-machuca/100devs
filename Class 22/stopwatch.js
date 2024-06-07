class Stopwatch {
  constructor() {
    this._duration = 0;
    this.timer = null;
  }

  start() {
    if (this.timer === null) {
      this.timer = setInterval(() => {
        this._duration += 1;
      }, 1000);
    } else {
      throw new Error("Timer cannot be started twice");
    }
  }

  get duration() {
    return this._duration;
  }

  stop() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    } else {
      throw new Error("Timer cannot be stopped twice");
    }
  }

  reset() {
    this.timer = null;
    this._duration = 0;
  }
}

const stopwatch = new Stopwatch();

stopwatch.start();
console.log(stopwatch.duration);

(async () => {
  function sleep() {
    return new Promise((res, rej) => setTimeout(res, 3000));
  }

  await sleep();
  stopwatch.stop();
  console.log(stopwatch.duration);
})();
