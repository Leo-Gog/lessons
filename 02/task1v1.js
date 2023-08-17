//task1 - youngest user
const arr=[{name: 'Temo', age:25},{name: 'Lasha' , age: 21}, {name: 'Ana', age: 28}];
function youagestUser(arr){
    let ages = arr.map(obj => obj.age); // make array of ages
    let indexes = ages.map(
            (obj,index,ages)=>
            ages.find(age => age < obj)===undefined?index:-1
            ); // find index of yungest user 
    let youagUser = arr[indexes.find(x=>x>-1)].name; // get name of user
    return youagUser;
}