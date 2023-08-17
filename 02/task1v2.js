
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

// console.log(youagestUser(users))