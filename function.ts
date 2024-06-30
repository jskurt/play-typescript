/**
 ****************************************************************************************************
 * ### Function
 ****************************************************************************************************
 */
console.log(`\n[ Function ]`);

{
  function hello(name?: string) {
    return `Hello, ${name || "world"}`;
  }

  // same as above
  function hello2(name = "world") {
    return `Hello, ${name}`;
  }

  const result = hello();
  console.log(`c.log ## result ##`, result);

  const result2 = hello("Jisung");
  console.log(`c.log ## result2 ##`, result2);
}

{
  function hello3(name: string, age?: number): string {
    if (age !== undefined) {
      return `Hello, ${name}. You are ${age}.`;
    } else {
      return `Hello, ${name}`;
    }
  }

  hello3("Jisung");
  console.log(`c.log ## hello3('Jisung') ##`, hello3("Jisung"));

  hello3("Jisung", 30);
  console.log(`c.log ## hello3('Jisung', 30) ##`, hello3("Jisung", 30));
}

{
  function hello4(age: number | undefined, name: string): string {
    if (age !== undefined) {
      return `Hello, ${name}. You are ${age}.`;
    } else {
      return `Hello, ${name}`;
    }
  }

  hello4(30, "Jisung");
  console.log(`c.log ## hello4(30, "Jisung") ##`, hello4(30, "Jisung"));

  hello4(undefined, "Jisung");
  console.log(
    `c.log ## hello4(undefined, "Jisung") ##`,
    hello4(undefined, "Jisung"),
  );
}

{
  function add(...nums: number[]) {
    // like Array<number>
    return nums.reduce((result, num) => result + num, 0);
  }

  add(1, 2, 3);
  console.log(`c.log ## add(1, 2, 3) ##`, add(1, 2, 3));

  add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  console.log(
    `c.log ## add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) ##`,
    add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  );
}

{
  interface User {
    name: string;
  }

  const Sam: User = { name: "Sam" };

  function showName(this: User, age: number, gender: "m" | "f") {
    console.log(this.name, age, gender);
  }

  const funcTest = showName.bind(Sam);
  funcTest(30, "m");
}

{
  // function overloading
  interface User {
    name: string;
    age: number;
  }

  function join(name: string, age: string): string;
  function join(name: string, age: number): User;

  function join(name: string, age: number | string): User | string {
    if (typeof age === "number") {
      return {
        name,
        age,
      };
    } else {
      return "Please enter you age as a number";
    }
  }

  const sam: User = join("Sam", 30);
  console.log(`c.log ## sam ##`, sam);
  const jane: string = join("Jane", "30");
  console.log(`c.log ## jane ##`, jane);
}
