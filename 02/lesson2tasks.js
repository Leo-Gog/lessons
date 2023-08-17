/**
 * @author Levan Alimbarashvili
 */

// task1 - youngest user

const users=[{name: 'Temo', age:25},{name: 'Lasha' , age: 21}, {name: 'Ana', age: 28}];

function youagestUser(users){
    let result='',y;
    for (const user of users) {
        y=users.find(x => x.age < user.age); // find younger users, youngest returns undefined
        result = result + (y === undefined ? user.name : ''); // get youngest user's name
    }
    return result;
}

// task2 - new object with same values

function newObj(user){
    return {...user};
}
//here could be for..in too
/*
function newObj(user){
    let newOne={};
    for (let prop in user) {
        newOne[prop]=prop; 
    }
   return newOne;
}
*/

// task3 - A and B play die, first 3 wins

function winnerAndLoser(a,b){
    let first=0,second=0, count1=0, count2=0;
    while(first!==3){
        first=Math.floor(Math.random()*6+1);
        count1++;
    }
    while(second!==3){
        second=Math.floor(Math.random()*6+1);
        count2++;
    }
    // recursion if both get 3 in the same tries
    if(count1===count2){
        return winnerAndLoser(a,b);
    };
    return count1<count2?a:b;
}