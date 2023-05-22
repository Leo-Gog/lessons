/**
 * @author Levan Alimbarashvili
 */

//task1 hide div on click
/*
<input type=""button"" id=""hider"" value=""Click to hide the text"" />
<div id=""text"">Text</div>
*/

let btn = document.createElement('input')
btn.type = 'button'
btn.id = 'hider'
btn.value = 'Click to hide the text'

let myDiv = document.createElement('div')
myDiv.id = 'text'
myDiv.innerText = 'Text'

document.body.append(btn, myDiv)

btn.addEventListener('click', ()=>myDiv.style.display = 'none')

//task2 add html to document by js
/*
<div id=""card"">
<h2>Gandalf</h2>
<a href=""#"">Go to Profile</a>
</div>
*/

let card = document.createElement('div')
card.id = 'card'

let e1 = document.createElement('h2')
e1.textContent = 'Gandalf'

let e2 = document.createElement('a')
e2.setAttribute('href', '#')
e2.textContent = 'Go to Profile'

card.append(e1,e2)
document.body.append(card)

//task3+bonus make quiz with questions

const questions =[
    {
        question: 'How many layers does the OSI model have?',
        variants: ['3', '5', '7'],
        index: 2
    },
    {
        question: 'When does Unix time start',
        variants: ['13 March, 2012', '1 January, 1970', '6 August, 1991'],
        index: 1
    },
    {
        question: 'Which company created JavaScript?',
        variants: ['Netscape Communications Corporation', 'Microsoft Corporation', 'International Business Machines Corporation'],
        index: 0
    }
]

for(let i=0;i<questions.length;i++){
    document.body.insertAdjacentHTML('beforeend',
    `<fieldset id="quiz${i}"><legend>${questions[i].question}</legend><div><input type="radio" name="quiz${i}" id="id${i}_0"><label for="id${i}_0">${questions[i].variants[0]}</label></div><div><input type="radio" name="quiz${i}" id="id${i}_1"><label for="id${i}_1">${questions[i].variants[1]}</label></div><div><input type="radio" name="quiz${i}" id="id${i}_2"><label for="id${i}_2">${questions[i].variants[2]}</label></div></fieldset>`)
}

document.body.insertAdjacentHTML('beforeend', '<div id="myOutput"></div>')
let myOutput = document.querySelector('#myOutput')
let score = 0

let fields = document.querySelectorAll('fieldset')
fields.forEach((field,fiIndex)=>{
    let inputs = field.querySelectorAll('input')
    inputs.forEach((input, index)=>{
        input.addEventListener('click', ()=>{
            if(index===questions[fiIndex].index){
                document.querySelector(`[for='${input.id}']`).style.color = 'green'
                score += 1
            }else{
                document.querySelector(`[for='${input.id}']`).style.color = 'red'
            }
            myOutput.innerText = `Your score: ${questions.length}/${score}`
            field.setAttribute('disabled', 'true')
        })
    })
})

