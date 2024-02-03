let first = '';
let second = '';
let op = '';
let total = '';
let shown = '';
let repeat = '';
let equalRepeat = '';
const doAdd = ((a, b) => {
    total = (+a + +b);
    return total;
})
const doSub = ((b, a) => {
    total = (+b - +a);
    return total;
})
const doMult = ((a, b) => {
    total = (+a * +b);
    return total;
})
const doDiv = ((b, a) => {
    total = (+b / +a);
    return total
})
function operate() {
    if (op === '+') {
        doAdd(+first, +second)
    } else if (op === '-') {
        doSub(+second, +first)
    } else if (op === '*') {
        doMult(+first, +second)
    } else if (op === '/') {
        doDiv(+second, +first)
    }
}
const changeSignTotal = ((a) => {
    total = (+a * -1);
    return a;
})
const changeSignFirst = ((a) => {
    first = (+a * -1);
    return a;
})

const display = document.querySelector('#display');
let output = document.createElement('div');
output.setAttribute('id', 'output');
display.appendChild(output);

const clear = document.querySelector('#clear');
clear.onclick = () => {
    if (clear.innerHTML == 'C') {
        clear.innerHTML = 'AC';
        first = '';
        output.innerHTML = '';
    } else {
        first = '';
        second = '';
        total = '';
        repeat = '';
        op = '';
        shown = '';
        output.innerHTML = '';
    }
};

const sign = document.querySelector('#sign');
sign.onclick = () => {
    if (first === '') {
        console.log(total)
        changeSignTotal(total);
        console.log(total)
        output.innerHTML = total;
    } else {
        changeSignFirst(first);
        output.innerHTML = first;
    }
}

const percentage = document.querySelector('#percentage');
percentage.onclick = () => {

};

const divide = document.querySelector('#divide');
divide.onclick = (() => {
    if (second !== '') {
        operate();
        shown = total;
        output.innerHTML = shown;
        second = total;
        repeat = first;
        first = '';
        op = '/';
    } else {
        second = first;
        first = '';
        op = '/';
    }
})
const multiply = document.querySelector('#multiply');
multiply.onclick = (() => {
    if (second !== '') {
        operate();
        shown = total;
        output.innerHTML = shown;
        second = total;
        repeat = first;
        first = '';
        op = '*';
    } else {
        second = first;
        first = '';
        op = '*';
    }
})
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
    if (clear.innerHTML === 'AC'){
        second = total;
    }
    else if (second !== '') {
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
    if (first == '') {
        console.log(repeat);
        console.log(second);
        first = repeat;
        second = total;
        operate();
        output.innerHTML = total;
        first = '';
    } else if (second !== '') {
        operate();
        clear.innerHTML = 'AC'
        shown = total;
        repeat = first;
        first = '';
        output.innerHTML = total;
    }
}
const decimal = document.querySelector('#decimal');
decimal.onclick = (() => {
    first += '.';
    shown = first;
    output.innerHTML = shown;
    });

const zero = document.querySelector('#zero');
zero.onclick = (() => {
    if (first == '') {
        first = 0;
        shown = first;
        output.innerHTML = shown;
        clear.innerHTML = 'C';
    } else {
        first += 0;
        shown = first;
        output.innerHTML = shown;
        clear.innerHTML = 'C';
    }
});

const one = document.querySelector('#one');
one.onclick = (() => {
    first += 1;
    shown = first;
    output.innerHTML = shown;
    clear.innerHTML = 'C';
});

const two = document.querySelector('#two');
two.onclick = (() => {
    first += 2;
    shown = first;
    output.innerHTML = shown;
    clear.innerHTML = 'C';
    });

const three = document.querySelector('#three');
three.onclick = (() => {
    first += 3;
    shown = first;
    output.innerHTML = shown;
    clear.innerHTML = 'C';
    });

const four = document.querySelector('#four');
four.onclick = (() => {
    first += 4;
    shown = first;
    output.innerHTML = shown;
    clear.innerHTML = 'C';
    });

const five = document.querySelector('#five');
five.onclick = (() => {
    first += 5;
    shown = first;
    output.innerHTML = shown;
    clear.innerHTML = 'C';
    });

const six = document.querySelector('#six');
six.onclick = (() => {
    first += 6;
    shown = first;
    output.innerHTML = shown;
    clear.innerHTML = 'C';
    });

const seven = document.querySelector('#seven');
seven.onclick = (() => {
    first += 7;
    shown = first;
    output.innerHTML = shown;
    clear.innerHTML = 'C';
    });

const eight = document.querySelector('#eight');
eight.onclick = (() => {
    first += 8;
    shown = first;
    output.innerHTML = shown;
    clear.innerHTML = 'C';
    });

const nine = document.querySelector('#nine');
nine.onclick = (() => {
    first += 9;
    shown = first;
    output.innerHTML = shown;
    clear.innerHTML = 'C';
    });