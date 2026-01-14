function dfs(ci: number, ci2: number, board: string[][]) {
    console.log(board[ci][ci2]);
}

function main() {
    let board : string[][] = [];
    let board_safe: readonly string[][] = []; // one way to annotate
    let row = [" ", " ", " "]  // type inference to string

    for (let i = 0; i < row.length; ++i) {
        board.push(row);
    }

    board[1][1] = "x"; // this is an error, will refer to the same array on line 3.
    // JavaScript / TS semantics will showcase faulty points where immutability might not be as flexible in Python.

    // anonymous function for detecting an 'x'
    board[1].some( (cell) => cell === "x");

    let count = 0;
    board[1].forEach(cell => {
        if (cell === 'x') {
            count += 1;
        }
    })

    board.forEach(row => {
        row.forEach(item => {
            if (item === "x") {
                dfs(0, 1, board);
            }
        })
    })

    for (let r = 0; r < 3; ++r) {
        for (let c = 0; c < 3; ++c) {
            console.log(board[r][c]);
        }
    }
}

// TypeScript Type Lattice
// higher order -> any (turn off types checker and convert back to Dynamic JS)
// null, undefined, string, number, boolean, Date
// avoid using null, try using undefined. People make arguments for which one is `better`.
// Only one special object for undefined. 
// * Treat everything as an implicint pointer, e.g., a string variable will always be referring to a string.
// * How about a composite type? ==> string | undefined