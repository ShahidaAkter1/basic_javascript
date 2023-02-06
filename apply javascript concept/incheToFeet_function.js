/**
 *The standard height of a vollyball player is 7 feet. Jim wants to join the vollyball team,so he decided to measure his height to see if he meets the standard. calculate his height in feet..
 to convert inch to feet:
 feet= inch/12 
 */

function inchToFeet(inches){
 const feet = inches / 12;
 return feet;
}

const dadaInches= 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);


const nanaInches= 168;
const nanaFeet = inchToFeet(nanaInches);
console.log(nanaFeet);