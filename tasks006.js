/**
 * @author Levan Alimbarashvili
 */

//task1 replace 'valueToReplace' to 'valueToReplaceWith' and return the new 'string'

function strReplace(string, valueToReplace, valueToReplaceWith){
    [valueToReplaceWith, valueToReplace] = [valueToReplace, valueToReplaceWith]
    string = valueToReplace + ' ' + valueToReplaceWith
    return string
}

//task2 all words with the first character in uppercase

function upWords(str){
    return str.split(' ')
    .map(x => x[0].toUpperCase() + x.substr(1))
    .join(' ')
}

//task3 sort users by age
//example: [{name: 'Lasha', age: 30}, {name: 'Saba', age: 20}] to [{name: 'Saba', age: 20}, {name: 'Lasha', age: 30}]

function sortUsers(arr){
    return arr.sort((a, b) => a.age - b.age)
}