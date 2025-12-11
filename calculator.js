const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { 
    if (b === 0) throw new Error("Cannot divide by zero!");
    return a / b; 
}
function average(numbers) {
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return sum / numbers.length;
}

function askNumbers() {
    readline.question("Enter numbers separated by comma: ", input => {
        try {
            let nums = input.split(',').map(Number);
            if (nums.some(isNaN)) throw new Error("Invalid input! Enter numbers only.");
            console.log("Sum:", nums.reduce((a,b)=>a+b,0));
            console.log("Difference (first - second):", subtract(nums[0], nums[1] || 0));
            console.log("Product:", nums.reduce((a,b)=>a*b,1));
            console.log("Division (first / second):", divide(nums[0], nums[1] || 1));
            console.log("Average:", average(nums));
        } catch (err) {
            console.log("Error:", err.message);
        } finally {
            readline.close();
        }
    });
}

askNumbers();
