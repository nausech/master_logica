class Watcher {
  constructor() {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
  }

  updateWatcher(seconds) {
    this.seconds += seconds;
    if (this.seconds >= 60) {
      this.minutes += 1;
      this.seconds -= 60;
    }
    if (this.minutes >= 60) {
      this.hours += 1;
      this.minutes -= 60;
    }
    if (this.hours >= 24) {
      this.hours -= 24;
    }

  }
  showTime() {
    this.updateWatcher(1);
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }
  startWatcher() {
    setInterval(() => {
      this.showTime();
    }, 1000);
  }
}

let watcher = new Watcher();
watcher.startWatcher();