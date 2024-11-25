class EventsEmitter {
  _events = {};

  on(name, fn) {
    this._events[name] = this._events[name]
      ? [...this._events[name], fn]
      : [fn];
  }

  emit(name, value) {
    for (let fn of this._events[name]) {
      fn(value);
    }
  }
}

class Car extends EventsEmitter {
  _tank = 0;
  _km = 0;

  drive(km) {
    const cost = km * 0.1;

    if (cost <= this._tank) {
      this._km += km;
      this._tank -= cost;

      this.emit("drove", km);
    }
  }

  fuel(liter) {
    this._tank += liter;

    this.emit("fueled", liter);
  }
}

const car = new Car();

car.on("drove", (km) => {
  console.log("drove (km)", km);
});

car.on("drove", () => {
  console.log("car drove");
});

car.on("fueled", (liter) => {
  console.log("car fueled", liter);
});

car.fuel(20);
car.drive(20);
car.drive(50);
