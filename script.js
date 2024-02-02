let first = '';
let second = '';
let op = '';
let total = '';
const doAdd = ((first, second) => {
    total = first + second;
    return total;
})
  
const display = document.querySelector('#display');
let output = document.createElement('div');
output.setAttribute('id', 'output');
display.appendChild(output);

const clear = document.querySelector('#clear');
clear.onclick = () => {
    
};

const sign = document.querySelector('#sign');
sign.onclick = () => {
    
}

const percentage = document.querySelector('#percentage');
percentage.onclick = () => {

};

const divide = document.querySelector('#divide');

const multiply = document.querySelector('#multiply');

const subtract = document.querySelector('#subtract');



const add = document.querySelector('#add');
add.onclick = (() => {
    op = '+';
    if (second !== '') {
        doAdd(first, second);
        output.innerHTML = total;
    } else {
        second = first;
        first = '';
    }
})


const equal = document.querySelector('#equal');
equal.onclick = () => {

}

const zero = document.querySelector('#zero');

const one = document.querySelector('#one');
one.onclick = (() => {
    first += 1;
    console.log(first);
    output.innerHTML = first;
})
  

const two = document.querySelector('#two');
two.onclick = () => {
  
    }
const three = document.querySelector('#three');

const four = document.querySelector('#four');

const five = document.querySelector('#five');

const six = document.querySelector('#six');

const seven = document.querySelector('#seven');

const eight = document.querySelector('#eight');

const nine = document.querySelector('#nine');
