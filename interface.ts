/**
 ****************************************************************************************************
 * ### Interface
 ****************************************************************************************************
 */
console.log(`\n[ Interface ]`);

{
  type Score = "A" | "B" | "C" | "F";

  interface User {
    name: string;
    age: number;
    gender?: string;
    readonly birthYear: number;
    [grade: number]: Score;
  }

  let user: User = {
    name: "xx",
    age: 30,
    birthYear: 2000,
    1: "A",
    2: "B",
  };

  user.age = 10;
  user.gender = "male";
  // user.birthYear = 1990; // error

  console.log(`c.log ## user.name ##`, user.name);
}

{
  interface Add {
    (num1: number, num2: number): number;
  }

  const add: Add = function (x, y) {
    return x + y;
  };

  console.log(`c.log ## add(10, 20) ##`, add(10, 20));
}

{
  interface IsAdult {
    (age: number): boolean;
  }

  const result: IsAdult = (age) => {
    return age > 19;
  };

  console.log(`c.log ## result(27) ##`, result(27));
}

// implements
{
  interface Car {
    color: string;
    wheels: number;
    start(): void;
  }

  class Bmw implements Car {
    color;
    wheels = 4;
    constructor(color: string) {
      this.color = color;
    }
    start() {
      console.log("go...");
    }
  }

  const classBmw = new Bmw("green");

  console.log(`c.log ## classBmw ##`, classBmw);
  classBmw.start();
}

// extends
{
  interface Car {
    color: string;
    wheels: number;
    start(): void;
  }

  interface Benz extends Car {
    door: number;
    stop(): void;
  }

  const objBenz: Benz = {
    door: 5,
    stop() {
      console.log("stop...");
    },
    color: "black",
    wheels: 4,
    start() {
      console.log("go...");
    },
  };

  console.log(`c.log ## objBenz ##`, objBenz);
  objBenz.start();
}

{
  interface Car {
    color: string;
    wheels: number;
    start(): void;
  }

  interface Toy {
    name: string;
  }

  interface ToyCar extends Car, Toy {
    price: number;
  }

  const objTest: ToyCar = {
    color: "white",
    wheels: 4,
    start() {
      console.log("go...");
    },
    name: "KkoKkoMom",
    price: 30000,
  };

  console.log(`c.log ## objTest ##`, objTest);
  objTest.start();
}
