
const names = ['abul', 'babul', 'dabul', 'cabul', 'ebul', 'babul', 'abul', 'kabul', 'dabul'];

function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name)
        }
        console.log(name);
    }
    return unique;
}

const uniqueName = removeDuplicate(names);
console.log(uniqueName);

function removeDoubleNames(names){
    let uniqueName = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        if(uniqueName.includes(name) === false){
            uniqueName.push(name);
        }
        console.log(name);
    }
    return uniqueName;
}
const totalName = removeDoubleNames(names);
console.log(totalName);

for(let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('fooBar');
    }
    else if(i % 3 === 0){
        console.log('foo');
    }
    else if(i % 5 === 0){
        console.log('Bar')
    }
    else{
        console.log(i);
    }
}