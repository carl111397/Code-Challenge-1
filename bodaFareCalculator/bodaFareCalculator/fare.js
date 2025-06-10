#!/usr/bin/env node

/**
 * Boda Fare Calculator
 * Calculates fare based on distance in kilometers
 */

function calculateBodaFare() {
    // Constants for fare calculation
    const BASE_FARE = 50;
    const PER_KM_CHARGE = 15;

    // Set up readline for user input
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Unafika wapi Mkubwa? Kilometer ngapi?: ", (input) => {
        const distanceInKm = parseFloat(input);

        // Validate input
        if (isNaN(distanceInKm)) {
            console.log("Tafadhali weka nambari halali ya kilomita.");
            readline.close();
            return;
        }

        // Calculate fare
        const totalFare = BASE_FARE + (PER_KM_CHARGE * distanceInKm);
        console.log(`Nauli yako ni: KES ${totalFare}`);

        readline.close();
    });
}

// Run the calculator
calculateBodaFare();
