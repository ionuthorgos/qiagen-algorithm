function factorial(n: number): number {
    // Calculate the factorial of a number
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function binomialCoefficient(n: number, k: number): number {
    // The formula for the binomial coefficient is n! / (k! * (n - k)!)
    return factorial(n) / (factorial(k) * factorial(n - k));
}

function pascal(row: number, col: number): number {
    // Calculate the value at a specific row and column in Pascal's Triangle
    // Here, rows and columns are indexed starting from 0
    if (col > row) {
        throw new Error('Column cannot be greater than row in Pascal’s Triangle');
    }
    return binomialCoefficient(row, col);
}

console.log(pascal(0, 0)); // Should return 1
console.log(pascal(2, 1)); // Should return 2
console.log(pascal(3, 2)); // Should return 3
