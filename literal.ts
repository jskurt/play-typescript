/**
 ****************************************************************************************************
 * ### Literal Types
 ****************************************************************************************************
 */
console.log(`\n[ Literal Types ]`);

{
  const userName1 = "Jisung"; // string literal type
  let userName2 = "Jenny";

  // userName2 = 3; // it was defined as a string
  // if you want use number also, you need to add that userName2 : string | number
}

{
  type Job = "police" | "developer" | "teacher"; // '|' : union type

  interface User {
    name: string;
    job: Job;
  }

  const user: User = {
    name: "Bob",
    job: "teacher",
  };

  console.log(`c.log ## user ##`, user);
  interface HighSchoolStudent {
    name: number | string;
    grade: 1 | 2 | 3;
  }
}

{
  // Union Types : |

  interface Car {
    name: "car";
    color: string;
    start(): void;
  }

  interface Mobile {
    name: "mobile";
    color: string;
    call(): void;
  }

  function getGift(gift: Car | Mobile) {
    console.log(`c.log ## gift.color ##`, gift.color);
    if (gift.name === "car") {
      gift.start();
    } else {
      gift.call();
    }
  }
}

{
  // Intersection Types : &

  interface Car {
    name: string;
    start(): void;
  }

  interface Toy {
    name: string;
    color: string;
    price: number;
  }

  const toyCar: Toy & Car = {
    name: "tayo",
    start() {},
    color: "blue",
    price: 1000,
  };
}
