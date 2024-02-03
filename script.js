let first = '';
let second = '';
let op = '';
let total = '';
let shown = '';
let repeat = '';
const doAdd = ((a, b) => {
    total = (+a + +b);
    return total;
})
const doSub = ((b, a) => {
    total = (+b - +a);
    return total;
})

function operate() {
    if (op === '+') {
        doAdd(+first, +second)
    } else if (op === '-') {
        doSub(+second, +first)
    }
}

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
subtract.onclick = (() => {
    
    if (second !== '') {
        operate();
        shown = total;
        output.innerHTML = shown;
        second = total;
        repeat = first;
        first = '';
        op = '-';
    } else {
        second = first;
        first = '';
        op = '-';
    }
})
const add = document.querySelector('#add');
add.onclick = (() => {
    if (second !== '') {
        operate();
        shown = total;
        output.innerHTML = shown;
        second = total;
        repeat = first;
        op = '+';
        first = '';
    } else {
        second = first;
        first = '';
        op = '+';
    }
})

const equal = document.querySelector('#equal');
equal.onclick = () => {
    if (second !== '') {
    operate();
    shown = total;
    repeat = first;
    output.innerHTML = total;
    }
}

const zero = document.querySelector('#zero');
zero.onclick = (() => {
    if (first == '') {
        first = 0;
        shown = first;
        output.innerHTML = shown;
    } else {
        first += 0;
        shown = first;
        output.innerHTML = shown;
    }
});

const one = document.querySelector('#one');
one.onclick = (() => {
    first += 1;
    shown = first;
    output.innerHTML = shown;
});

const two = document.querySelector('#two');
two.onclick = (() => {
    first += 2;
    shown = first;
    output.innerHTML = shown;
    });

const three = document.querySelector('#three');
three.onclick = (() => {
    first += 3;
    shown = first;
    output.innerHTML = shown;
    });

const four = document.querySelector('#four');
four.onclick = (() => {
    first += 4;
    shown = first;
    output.innerHTML = shown;
    });

const five = document.querySelector('#five');
five.onclick = (() => {
    first += 5;
    shown = first;
    output.innerHTML = shown;
    });

const six = document.querySelector('#six');
six.onclick = (() => {
    first += 6;
    shown = first;
    output.innerHTML = shown;
    });

const seven = document.querySelector('#seven');
seven.onclick = (() => {
    first += 7;
    shown = first;
    output.innerHTML = shown;
    });

const eight = document.querySelector('#eight');
eight.onclick = (() => {
    first += 8;
    shown = first;
    output.innerHTML = shown;
    });

const nine = document.querySelector('#nine');
nine.onclick = (() => {
    first += 9;
    shown = first;
    output.innerHTML = shown;
    });