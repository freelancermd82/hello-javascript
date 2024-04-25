
function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const isMyLeapYear = isLeapYear(2024);
// console.log(isMyLeapYear);

function getSumOfAnArray(numbers){
    let sum = 0;
    for(var i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum)
    }
    return sum;
}
const total = getSumOfAnArray(5);
// console.log(total);

function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result * i;
        console.log(i, result);
    }
    return result;
}
const fact = factorial(5);
console.log(fact);  