
var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyBoard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}
const total = Object.keys(shoppingCart);
console.log(total);
const value = Object.values(shoppingCart);
console.log(value);

for(var i = 0; i < total.length; i ++){
    var propertyName = total[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}