
// task2 - new object with same values

function newObj(user){
    let newOne={};
    for (let prop in user) {
        newOne[prop]=prop; 
    }
   return newOne;
}

// const user = {name: 'Temo', age:25};

// const user2 = user;
// console.log(user2)
// console.log(user2===user)

// const user3 = newObj(user)
// console.log(user3)
// console.log(user3===user)