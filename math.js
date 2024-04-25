
const result = Math.pow(3, 8);
console.log(result);

const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);
console.log(gap);
if(gap < 5){
    console.log('you guys can be friend');
}
else{
    console.log('you guys stay apart');
}

const number = 2.5000;
const fullName = Math.round(number);
console.log(fullName);
const result2 = Math.ceil(2.000001);
const result3 = Math.floor(456.999);
console.log(result2);
console.log(result3);

console.log(Math.random());
for(let i = 0; i < 20; i++){
    const random = Math.round(Math.random() * 6);
    console.log(random);
}

function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element < largest){
            largest = element;
        }
        console.log(element);
    }
    return largest;
}
const heights = [167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log('tallest person is : ', tallest);