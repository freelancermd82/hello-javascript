

// function woodCalculator(chairquantity, tablequantity, bedquentity){
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;

//     const chairWood = chairquantity * perChairWood;
//     const tableWood = tablequantity * perTableWood;
//     const bedWood = bedquentity * perBedWood;

//     const totalWood = chairWood + tableWood + bedWood;
//     return totalWood;

// }
// const totalWood = woodCalculator(1, 1, 0);
// console.log('total wood wequired : ', totalWood);

const phones = [
    {name: 'Oppo', camera: 10, storage: '32gb', price: 80000, color: 'black'},
    {name: 'samsung', camera: 10, storage: '32gb', price: 20000, color: 'black'},
    {name: 'Walton', camera: 10, storage: '32gb', price: 32000, color: 'black'},
    {name: 'Nokia', camera: 10, storage: '32gb', price: 23000, color: 'black'},
    {name: 'Ctcell', camera: 10, storage: '32gb', price: 152000, color: 'black'},
];

function lowPriceExist(phones) {
    let addPhone = phones[0]
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < addPhone.price){
            addPhone = phone;
        }
        // console.log(phone);
    }
    return addPhone;
}
const uniqueLowPrice = lowPriceExist(phones);
console.log(uniqueLowPrice);





// function cheapest(phones){
//    let cheapPrice = phones[0];
//     for(let i = 0; i < phones.length; i++){
//         const phone = phones[i];
//         if(phone.price < cheapPrice.price){
//             cheapPrice = phone
//         }

//         // console.log(phone);
//     }
//     return cheapPrice;
// }
// const lowPrice = cheapest(phones);
// console.log(lowPrice);