// ============================================================================
// 03: Control Flow
// ============================================================================

let score: number = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Temporary conditional");
}

// TypeScript will ensure the condition is a "truthy" or "falsy" type.
// Loosely, those are the JS terms for values that can be treated as true / false.
let name: string | undefined;
console.log(`The length of the name is ${name.length}`);


// Switch Statements
let day: string = "Monday";
switch (day) {
    case "Monday":
        console.log("Start");
        break;
    case "Tuesday":
        console.log("End");
        break;
    default:
        console.log("Statistics.");
}


// For Loop
// TypeScript supports traditional for loops.
console.log("Counting to 5");
for (let i : number = 1; i <= 5; ++i) {
    console.log(i);
}

let countdown: number = 3;
console.log("countdown.");
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}
console.log("stuff.");


let even_number: number;
do {
    even_number = 4;
    console.log(`Generated: ${even_number}`);
    console.log(`Generated: ${even_number}`);
} while (even_number % 2 !== 0);

console.log(`Final even number: ${even_number}`);
console.log("Printing numbers up through 7");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        // strict type checking
        console.log(i);
    }
    console.log(i);
}


// ============================================================================
// 04: Array Iteration and Manipulation in TypeScript
// ============================================================================
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Dustin", "El", "Lucas", "Max", "Mike", "Will"];
let moreNumbers: Array<number> = [10, 20, 30];
let mixed: (string | number)[] = ["hello", 42, "world"];
console.log(numbers);

// array operands
let i: number = 12;
numbers.push(i);
let last = numbers.pop();
console.log(last);
console.log(numbers); // [1,2,3,4,5]

numbers.unshift(0);
console.log(numbers); // adds to the beginning: [0,1,2,3,4,5]

let first = numbers.shift();
console.log(first); // removes from the beginning.
console.log(numbers); // [1,2,3,4,5]

// iterating over arrays
// 1. classif traversal
for (let i = 0; i < numbers.length; i++) {
    console.log(`numbers[${i}] = ${numbers[i]}`);
}

// 2. for-of loop (similar to range based for loop in C++)
for (let num of numbers) {
    console.log(num);
}

// 3. forEach, a higher order function that calls a given function on each element.
numbers.forEach((num) => {console.log(num)});


function printBackwards(numbers: Array<number>) {
    for (let m: number = numbers.length; m > 0; --m) {
        console.log(`The number is: ${m}.`);
    }
}
