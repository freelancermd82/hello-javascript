
const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);

const dateInches = 144;
const dadaFeet = dateInches / 12;
console.log('data feet', dadaFeet);

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const dadaInches = 144;
const dataFeet = inchToFeet(dadaInches);
console.log(dadaFeet);