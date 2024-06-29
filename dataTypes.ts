/**
 ****************************************************************************************************
 * ### Data Types
 ****************************************************************************************************
 */
console.log(`\n[ Data Types ]`);

{
  let str: string = "string";
  let nNumber: number = 30;
  let bBoolean: boolean = true;
  let arrNumber: number[] = [1, 2, 3];
  let arrNumber_2: Array<number> = [1, 2, 3];
  let arrString: string[] = ["a", "b", "c"];
  let arrString_2: Array<string> = ["a", "b", "c"];
}

// Tuple
{
  let arrTuple: [string, number];
  arrTuple = ["a", 1];
  // arrTuple = [1, "a"]; // error
}

// void
{
  function sayHello(): void {
    console.log(`c.log ## sayHello() ##`);
  }
  sayHello();
}

// never
{
  // always error
  function showError(): never {
    throw new Error();
  }

  // not finish forever
  function infLoop(): never {
    while (true) {
      // do something
    }
  }
}

// enum
{
  enum Os_number {
    Window,
    IOS,
    Android,
  }

  console.log(`c.log ## Os_number.Window ##`, Os_number.Window);
  console.log(`c.log ## Os_number[1] ##`, Os_number[1]);
  console.log(`c.log ## Os_number['Android'] ##`, Os_number["Android"]);

  enum Os_string {
    Window = "win",
    IOS = "ios",
    Android = "and",
  }

  console.log(`c.log ## Os_string.Window ##`, Os_string.Window);

  let myOs: Os_string;
  myOs = Os_string.Window;

  console.log(`c.log ## myOs ##`, myOs);
}

// null
{
  let nullType: null = null;
  console.log(`c.log ## nullType ##`, nullType);
}

// undefined
{
  let undefinedType: undefined = undefined;
  console.log(`c.log ## undefinedType ##`, undefinedType);
}
