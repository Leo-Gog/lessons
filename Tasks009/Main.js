//task1 create modal

let dialog = document.createElement('dialog')
dialog.id = 'modal'
let button = document.createElement('button')
button.innerText = 'Open modal'

document.body.append(dialog, button)

button.addEventListener('click', ()=>{
    dialog.showModal()
    button.style.display = 'none'
})

//task2 create input which can change background color of the body
//allowed colors: red, blue, green, black, white

const colors = ['red', 'blue', 'green', 'black', 'white']

let input = document.createElement('input')
input.setAttribute('placeholder', ' Enter your favorite color')
let button2 = document.createElement('button')
button2.innerText = 'Check'
let body = document.body

function checkColor(arr, value){
    value = value.toLocaleLowerCase()
    if(arr.includes(value)){
        body.style.backgroundColor = value
    }
    else{
        alert(`Choose from these colors: ${arr.join(', ')}`)
    }
}

dialog.append(input, button2)

button2.addEventListener('click', ()=>{
    checkColor(colors, input.value)
    input.value = ''
})


//task3 Create an input field where a customer can enter numbers separated by ':', and the return will be the average of the sum of the numbers


let divider = document.createElement('br')
let input2 = document.createElement('input')
input2.setAttribute('placeholder', ' Enter numbers')
let button3 = document.createElement('button')
button3.innerText = 'Avarage'

dialog.append(divider, input2, button3)

button3.addEventListener('click', ()=>{
    let numbers = input2.value.split(':').map(x=>Number(x))
    let sum = numbers.reduce((a,b)=>a+b,0)
    let len = numbers.length
    alert(sum/len)
    input2.value = ''
})

/*remarks
1. inputs could be sent by the enter key
2. we can't close the modal
3. 2nd input doesn't have a filter, and can return NaN 
 */