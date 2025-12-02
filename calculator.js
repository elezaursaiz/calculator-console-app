const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to validate number input
function getNumber(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            const num = parseFloat(answer);
            if (isNaN(num)) {
                console.log("❌ Invalid number. Try again.");
                resolve(getNumber(question)); // ask again
            } else {
                resolve(num);
            }
        });
    });
}

async function main() {
    console.log("=== Calculator App ===");

    let num1 = await getNumber("Enter first number: ");
    let num2 = await getNumber("Enter second number: ");

    console.log("\nResults:");
    console.log("Addition:", num1 + num2);
    console.log("Subtraction:", num1 - num2);
    console.log("Multiplication:", num1 * num2);

    if (num2 === 0) {
        console.log("Division: ❌ Cannot divide by zero");
    } else {
        console.log("Division:", num1 / num2);
    }

    console.log("Average:", (num1 + num2) / 2);

    rl.close();
}

main();
