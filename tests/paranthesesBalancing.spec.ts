// This function checks if the array of character strings has balanced parentheses.
function parenthesesBalanced(expression: string[]): boolean {
    // Initialize a stack to keep track of opening parentheses
    const stack: string[] = [];

    for (const char of expression) {
        // If the current character is an opening parenthesis, push it onto the stack
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            // If the current character is a closing parenthesis
            if (stack.length === 0) {
                // The parentheses are not balanced
                return false;
            }
            // Since we found a matching pair, pop the top of the stack
            stack.pop();
        }
    }
    // If the stack is empty, all parentheses were balanced;
    return stack.length === 0;
}

console.log(parenthesesBalanced([':', '-', ')']))
console.log(parenthesesBalanced(['(', ')', ')', '(']))