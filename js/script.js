let miles; 
let gallons; 
let mpg; 
let again = 'y';

do {
    miles = parseFloat(prompt('Enter miles driven.'));
    gallons = parseFloat(prompt('Enter gallons your vehicle holds.'));
    
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
    } else {
        alert('One or both of your entries are invalid.');
    }
    
    again = prompt('Do you want to perform another calculation? (y/n)', 'y');
} while (again === 'y');

console.log('Application has terminated.');