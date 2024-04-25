
function milesToKiloMeter(miles){
    const kilometer = miles * 1.609;
    return kilometer;
}
const rdMiles = 9;
const kilo = milesToKiloMeter(rdMiles);
console.log(kilo);

function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const result = isEven(89);
console.log(result);

function getSumOfAnArray(numbers){
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        console.log(element, index);
    }
}
const myNumbers = [12,14, 6, 15, 12,12];
const arrNumbers = getSumOfAnArray(myNumbers);
console.log(arrNumbers);

function factorial(numbers){
    let result = 1;
    for(let i = numbers; i >= 1;i--){
        result = result * i;
    }
    return result;
}
const fact = factorial(8);
console.log('factorial result: ', fact);