/**
 ****************************************************************************************************
 * ### Class
 ****************************************************************************************************
 * public
 *  - Accessible from both child classes and class instances.
 * private
 *  - Accessible from child classes.
 *  - '#' keyword can be used.
 * protected
 *  - Accessible only within the class.
 */
console.log(`\n[ Class ]`);

{
  class Car {
    color: string;
    // public color: string;
    // private color: string;
    // # color: string; // same as a private
    // protected color: string;
    constructor(color: string) {
      this.color = color;
    }

    start() {
      console.log("start");
    }
  }

  const bmw = new Car("red");
}

// Access modifier - public, private, protected
{
  class Car {
    name: string = "car";
    color: string;
    constructor(color: string, name: string) {
      this.color = color;
      this.name = name;
    }
    start() {
      console.log("start");
      console.log(`c.log ## this.name ##`, this.name);
    }
  }

  class Bmw extends Car {
    constructor(color: string, name: string) {
      super(color, name);
    }
    showName() {
      console.log(this.name);
    }
  }

  const z4 = new Bmw("black", "zzzz4");
  z4.showName();
}

// static
{
  class Car {
    name: string = "car";
    color: string;
    static wheels = 4;
    constructor(color: string, name: string) {
      this.color = color;
      this.name = name;
    }
    start() {
      console.log("start");
      console.log(`c.log ## this.name ##`, this.name);
      console.log(`c.log ## Car.wheels ##`, Car.wheels);
    }
  }

  class Bmw extends Car {
    constructor(color: string, name: string) {
      super(color, name);
    }
    showName() {
      console.log(this.name);
    }
  }

  const z4 = new Bmw("black", "zzzz4");
  console.log(`c.log ## Car.wheels ##`, Car.wheels);
}

// abstract class
{
  abstract class Car {
    color: string;
    constructor(color: string) {
      this.color = color;
    }
    start() {
      console.log("start");
    }
    abstract doSomething(): void;
  }

  // const car = new Car("red"); // error because it was defined abstract class.

  class Bmw extends Car {
    constructor(color: string) {
      super(color);
    }
    doSomething(): void {
      console.log("run doSomething()");
    }
  }

  const z4 = new Bmw("black");
  console.log(`c.log ## z4 ##`, z4);
}
