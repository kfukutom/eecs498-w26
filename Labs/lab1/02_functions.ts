// ============================================================================
// 02: Functions in TypeScript
// ============================================================================

function add(a: number, b: number) : number {
    return a + b;
} // parameters with explicitly specified return type.

function multiply(a: number, b: number) {
    return a * b;
} // without specification of return type, it will be inferred via TypeScript.

function make_greeting(ins: string) : string {
    return `Hello, ${ins}!`;
}


// Exercise 1: Create a function greet_repeatedly()
function greet_repeatedly(name: string, count: number) : string {
    for (let x = 0; x < count; ++x) {
        make_greeting(name);
    }
}
console.log(greet_repeatedly("Francis", 5));

// Default Parameters:
function createUser(name: string, role: string = "guest") : string {
    return `Created as a ${role}.`;
}

console.log(createUser("Charlie")); // Charlie will be a guest.
console.log(createUser("Anna", "admin")); // Anna will be an admin.

// Functions are first-class.
// In TypeScript, functions are "first-class", meaning they can be created at
// runtime and passed around via variables and parameters. We'll come back to this
// later when we cover the functional paradigm, but it's worth mentioning now.

function substract(a: number, b: number) : number {
    return a - b;
};

let myFunc = substract;
