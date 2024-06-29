/**
 ****************************************************************************************************
 * ### TypeScript
 ****************************************************************************************************
 * Javascript
 *   - Dynamic language
 *   - Types are determined at run-time and errors are detected during execution.
 * TypeScript, Java
 *   - Static language
 *   - Types are determined at compile-time and errors are detected during execution.
 */
console.log(`\n[ TypeScript ]`);

{
  function add(num1: number, num2: number) {
    console.log(`c.log ## num1 + num2 ##`, num1 + num2);
  }

  // add();
  add(1, 2);
  // add(3, 4, 5);
  // add("hello", "world");
}

{
  function showItems(arr: number[]) {
    arr.forEach((item) => {
      console.log(`c.log ## item ##`, item);
    });
  }

  showItems([1, 2, 3]);
}
