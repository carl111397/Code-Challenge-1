#!/usr/bin/env node

const readline = require('readline');

// Fee tiers
function calculateTransactionFee(amount) {
    if (amount <= 0) return 0;
    if (amount <= 100) return 10;
    if (amount <= 500) return 15;
    if (amount <= 1000) return 25;
    if (amount <= 2500) return 40;
    if (amount <= 5000) return 60;
    return 100;
}

// CLI interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Karibu! Ingiza kiasi cha kutuma (KES): ", (input) => {
    const amount = parseFloat(input);

    if (isNaN(amount) || amount <= 0) {
        console.log("Tafadhali ingiza kiasi halali zaidi ya sifuri.");
        rl.close();
        return;
    }

    const fee = calculateTransactionFee(amount);
    const total = amount + fee;

    console.log(`\nKiasi: KES ${amount.toFixed(2)}`);
    console.log(`Ada ya muamala: KES ${fee.toFixed(2)}`);
    console.log(`Jumla utakayolipa: KES ${total.toFixed(2)}\n`);

    rl.close();
});
