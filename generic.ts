/**
 ****************************************************************************************************
 * ### Generic
 ****************************************************************************************************
 * Use type parameter : <T>
 */
console.log(`\n[ Generic ]`);

{
  function getSize(arr: number[] | string[] | boolean[] | object[]): number {
    return arr.length;
  }

  const arr1 = [1, 2, 3];
  console.log(`c.log ## getSize(arr1) ##`, getSize(arr1));

  const arr2 = ["a", "b", "c", "d", "e"];
  console.log(`c.log ## getSize(arr2) ##`, getSize(arr2));

  const arr3 = [false, true, true];
  console.log(`c.log ## getSize(arr3) ##`, getSize(arr3));

  const arr4 = [{}, { name: "Tim" }];
  console.log(`c.log ## getSize(arr4) ##`, getSize(arr4));
}

{
  function getSizeUseGeneric<T>(arr: T[]): number {
    return arr.length;
  }

  const arr1 = [1, 2, 3];
  console.log(
    `c.log ## getSizeUseGeneric(arr1) ##`,
    getSizeUseGeneric<number>(arr1),
  );

  const arr2 = ["a", "b", "c", "d", "e"];
  console.log(
    `c.log ## getSizeUseGeneric(arr2) ##`,
    getSizeUseGeneric<string>(arr2),
  );

  const arr3 = [false, true, true];
  console.log(
    `c.log ## getSizeUseGeneric(arr3) ##`,
    getSizeUseGeneric<boolean>(arr3),
  );

  const arr4 = [{}, { name: "Tim" }];
  console.log(
    `c.log ## getSizeUseGeneric(arr4) ##`,
    getSizeUseGeneric<object>(arr4),
  );
}

{
  interface Mobile<T> {
    name: string;
    price: number;
    option: T;
  }

  // const m1: Mobile<object> = {
  const m1: Mobile<{ color: string; coupon: boolean }> = {
    name: "s21",
    price: 1000,
    option: {
      color: "red",
      coupon: false,
    },
  };
  console.log(`c.log ## m1 ##`, m1);

  const m2: Mobile<string> = {
    name: "s20",
    price: 900,
    option: "good",
  };
  console.log(`c.log ## m2 ##`, m2);
}

{
  interface User {
    name: string;
    age: number;
  }

  interface Car {
    name: string;
    color: string;
  }

  interface Book {
    price: number;
  }

  const user: User = { name: "a", age: 10 };
  const car: Car = { name: "bmw", color: "red" };
  const book: Book = { price: 3000 };

  function showName<T extends { name: string }>(data: T): string {
    return data.name;
  }

  showName(user);
  showName(car);
  // showName(book);
}
