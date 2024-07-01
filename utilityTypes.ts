/**
 ****************************************************************************************************
 * ### Utility Types
 ****************************************************************************************************
 */
console.log(`\n[ Utility Types ]`);

// keyof
{
  interface User {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
  }

  type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'

  // const uk1: UserKey = ""; // error, doesn't have key
  const uk2: UserKey = "id";
  console.log(`c.log ## uk2 ##`, uk2);
}

// Partial<T>
{
  interface User {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
  }

  let admin: Partial<User> = {
    id: 1,
    name: "Jisung",
  };

  console.log(`c.log ## admin ##`, admin);
  // same as above
  // interface User {
  //   id?: number;
  //   name?: string;
  //   age?: number;
  //   gender?: "m" | "f";
  // }
}

// Required<T>
{
  interface User {
    id: number;
    name: string;
    age?: number;
  }

  let admin: Required<User> = {
    id: 2,
    name: "Jisung",
    age: 30, // without this, an error will occur
  };

  console.log(`c.log ## admin ##`, admin);
}

// Readonly<T>
{
  interface User {
    id: number;
    name: string;
    age?: number;
  }

  let admin: Readonly<User> = {
    id: 3,
    name: "Jisung",
  };

  // admin.id = 5; // error, because Readonly

  console.log(`c.log ## admin ##`, admin);
}

// Record<K, T>
// K : Key, T : Type
{
  // interface Score {
  //   "1": "A" | "B" | "C" | "D";
  //   "2": "A" | "B" | "C" | "D";
  //   "3": "A" | "B" | "C" | "D";
  //   "4": "A" | "B" | "C" | "D";
  // }

  type Grade = "1" | "2" | "3" | "4";
  type Score = "A" | "B" | "C" | "D";
  // const score: Record<"1" | "2" | "3" | "4", "A" | "B" | "C" | "D"> = {
  const score: Record<Grade, Score> = {
    1: "A",
    2: "C",
    3: "B",
    4: "D",
  };

  console.log(`c.log ## score ##`, score);
}

{
  interface User {
    id: number;
    name: string;
    age: number;
  }

  function isValid(user: User) {
    const result: Record<keyof User, boolean> = {
      id: user.id > 0,
      name: user.name !== "",
      age: user.age > 0,
    };
    return result;
  }
}

// Pick<T, K>
// Pick and use only the K properties from the T type.
{
  interface User {
    id: number;
    name: string;
    age: number;
    gender: "M" | "W";
  }

  const admin: Pick<User, "id" | "name"> = {
    id: 0,
    name: "Jisung",
  };
}

// Omit<T, K>
// Omit properties
{
  interface User {
    id: number;
    name: string;
    age: number;
    gender: "M" | "W";
  }

  const admin: Omit<User, "age" | "gender"> = {
    id: 0,
    name: "Jisung",
  };
}

// Exclude<T1, T2>
// Exclude types
// Use type 1 excluding type 2.
{
  type T1 = string | number | boolean;
  type T2 = Exclude<T1, number | string>; // boolean
}

// NonNullable<Type>
{
  type T1 = string | null | undefined | void;
  type T2 = NonNullable<T1>; // string
}
