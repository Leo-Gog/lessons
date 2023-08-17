/**
 * @author Levan Alimbarashvili
 */


// დავალება 1

let a, b;

function isEqual(a, b){
    return a==b?"ტოლია":"არ არის ტოლი"; 
}

//იმ შემთხვევაში თუ გვინდა, რომ მონაცემის ტიპიც დაემთხვეს:  
/*
function isEqual(a,b){return a===b?"ტოლია":"არ არის ტოლი";}
*/


//დავალება 2

let degree;

function fahrenheitToCelsius(degree){
    if (typeof degree !== 'number') {
        return false;
    }
    return (degree-32)*5/9;
}
// if-ის condition ველში შეიძლებოდა  "|| isNaN(degree)"-ის დამატებაც, თუმცა დავალებაში მოთხოვნილია, რომ მონაცემის ტიპი უნდა იყოს რიცხვითი, არაა აუცილებელი თვითონ მნიშვნელობა იყოს რიცხვი (ანუ NaN-ი დასაშვებია)


//დავალება 3

let operation;

function myCalc(a, b, operation){
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        return false;
    }
    if (operation === '+') {
        return a + b;
    }
    if (operation === '-') {
        return a - b;
    }
    if (operation === '*') {
        return a * b;
    }
    if (operation === '/') {
        return a / b;
    }
    return false; 
}
//მე-2 დავალებისაგან განსხვაებით ამ დავალებაში მოთხოვნილია, რომ a და b ოპერანდები იყოს რიცხვები, ამიტომ გარდა მონაცემის ტიპისა საჭიროა შემოწმება NaN-ზეც
//იმის გათვალისწინებით, რომ რიცხვი შეიძლება იყოს BigInt ტიპისაც, ფუნნქციაში 1-ლი if-ის წინ შეიძლება შემდეგი კოდის დამატებაც:
/*
if (typeof a === 'bigint' && typeof b === 'bigint'){
    if (operation === '+') {
        return a + b;
    }
    if (operation === '-') {
        return a - b;
    }
    if (operation === '*') {
        return a * b;
    }
    if (operation === '/') {
        return a / b + ' (იმ შემთხვევაში თუ a არაა b-ს ჯერადი, რიცხვი დამრგვალდება)';
    }
    return false; 
}
*/
//მე ვარჩიე არ დამემატებინა BigInt ტიპის რიცხვები


//შემოწმებები

//დავალება 1, უნდა იყოს ტოლი
// console.log(isEqual(1,true)) // "ტოლია"
// console.log(isEqual(1,1)) // "ტოლია"
// console.log(isEqual(1,"1")) // "ტოლია"
// console.log(isEqual(1,1n)) // "ტოლია"
// console.log(isEqual("ტოლია","ტოლია")) // "ტოლია"
//დავალება 1, არ უნდა იყოს ტოლი
// console.log(isEqual(1,false)) // "არ არის ტოლი"
// console.log(isEqual(1,50)) // "არ არის ტოლი"
// console.log(isEqual(1,"50")) // "არ არის ტოლი"
// console.log(isEqual(1,50n)) // "არ არის ტოლი"
// console.log(isEqual(0,null)) // "არ არის ტოლი"
// console.log(isEqual(0,undefined)) // "არ არის ტოლი"
// console.log(isEqual("ტოლია","არ არის ტოლი")) // "არ არის ტოლი"

//დავალება 2
// console.log(fahrenheitToCelsius(false)) // false
// console.log(fahrenheitToCelsius(50)) // 10
// console.log(fahrenheitToCelsius("50")) // false
// console.log(fahrenheitToCelsius(50n)) // false

//დავალება 3
// console.log(myCalc(2,2,"^")) // false
// console.log(myCalc(2,NaN,"*")) // false
// console.log(myCalc(2,2,"/")) // 1
// console.log(myCalc(2,2,"+")) // 4
// console.log(myCalc(2,2,"-")) // 0
// console.log(myCalc(2,2,"*")) // 4
// console.log(myCalc(2,2n,"/")) // false
// console.log(myCalc(2,'2',"+")) // false
// console.log(myCalc(2,true,"-")) //  false