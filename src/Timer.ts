export class Timer {
  private startedAt: number;
  private name: string;

  constructor(name = '') {
    this.name = name;
  }

  static createAndStart(name = ''): Timer {
    const ins = new Timer(name);
    ins.start();
    return ins;
  }

  start() {
    this.startedAt = new Date().getTime();
  }

  reset() {
    this.start();
  }

  check(desc?: undefined): number;
  check(desc: string): void;
  check(desc: string | undefined): number | void {
    const time = new Date().getTime() - this.startedAt;

    if (desc) {
      console.info(`${this.name ? this.name + ':' : ''}${desc}\t${time}ms`);
      return;
    } else {
      return time;
    }
  }

  checkAndReset(desc?: undefined): number;
  checkAndReset(desc: string): void;
  checkAndReset(desc: string | undefined): number | void {
    const time = new Date().getTime() - this.startedAt;
    this.start();

    if (desc) {
      console.info(`${this.name ? this.name + ':' : ''}${desc}\t${time}ms`);
      return;
    } else {
      return time;
    }
  }
}
