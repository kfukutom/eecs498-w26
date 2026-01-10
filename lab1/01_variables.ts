// Primitive Types in TypeScript
let a: number = 25;
let b: number = 18.99;
let c: string = "hello";
let d: boolean = true;

// Type inference : TypeScript can often infer type based on assigned value.
// Hover over the variable below to see the inferred types.
let x = 42;
let y = 3.14;
let message = "hi";
let isActive = false;



// Strings
// 1. String literals can be defined with single quotes or double quotes.
let firstName = 'Jane';
let lastName = "Hopper";
console.log(firstName);
console.log(typeof(firstName));

// 2. The ${...} syntax can include any expression:
let aNum = 5;
let bNum = 10;
let sumMessage =   `The sum of ${aNum} and ${bNum} is ${aNum + bNum}`;
console.log(sumMessage);

// Multiline literal string can span multiple lines when using backticks.
let multiLine = `This is line one.
    This is line two and is indented.
This is line three.`
console.log(multiLine);



// 3. Optional Types
let val1: number | undefined;
let val2: number| undefined = 10;
val2 = undefined;
console.log(val2, typeof(val2));

// Note: TypeScript also has 'null' which is similar to undefined. Sometimes the
// two are constrasted as:
//  - undefined: something that is missing or not yet assigned
//  - null: something explicitly assigned to have "no value"
// But honestly, it's not clear that these should be separate concepts, and in
// practice the fact that there are two causes a lot of confusion.
let nullable_str1: string | null = null;
let nullable_str2: string | null = "hello";

let flexible: any = 42;
console.log(flexible);  // 42 (number)

flexible = "now I'm a string";
console.log(flexible);  // "now I'm a string" (string)

flexible = true;
console.log(flexible);  // true (boolean)
