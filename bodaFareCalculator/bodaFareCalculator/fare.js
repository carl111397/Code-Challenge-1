/**
 * Boda Boda Ride Fare Estimator
 * Calculates fare for motorcycle taxi rides in Kenya
 */

function calculateBodaFare() {
    // Constants for fare calculation
    const BASE_FARE = 50;
    const PER_KM_CHARGE = 15;
    
    // Prompt user for distance
    const distanceInKm = parseFloat(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));
    
    // Validate input
    if (isNaN(distanceInKm)) {
        console.log("Tafadhali weka nambari halali.");
        return;
    }
    
    // Calculate fare
    const distanceCharge = distanceInKm * PER_KM_CHARGE;
    const totalFare = BASE_FARE + distanceCharge;
    
    // Display results in Sheng (Kenyan slang)
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${BASE_FARE}`);
    console.log(`Mpaka Uko: KES ${distanceCharge}`);
    console.log(`Total: KES ${totalFare}\n`);
    console.log("Panda Pikipiki!");
}

// Call the function
calculateBodaFare();