let first = '';
let second = '';
let op = '';
let total = '';
let shown = '';
let repeat = '';
let equalLast = '';
const sadCat = document.createElement('img');
sadCat.setAttribute('id', 'sad-cat');
sadCat.src = ('./img/sad-cat.png');
const pawBottom = document.createElement('img');
pawBottom.setAttribute('id', 'paw-bottom');
pawBottom.src = ('./img/paw.svg');
const pawLeft = document.createElement('img');
pawLeft.setAttribute('id', 'paw-left');
pawLeft.src = ('./img/paw.svg');
const pawRight = document.createElement('img');
pawRight.setAttribute('id', 'paw-right');
pawRight.src = ('./img/paw.svg');
const background = document.querySelector('.background');
background.appendChild(pawBottom);
background.appendChild(pawLeft);
background.appendChild(pawRight)

const doAdd = ((a, b) => {
    total = (+a + +b );
    if (total >= 1000000000|| total <= -1000000000) {
        total = total.toExponential(4);
        return total;
    }
    return total;
})
const doSub = ((b, a) => {
    total = (+b - +a );
    if (total >= 1000000000|| total <= -1000000000) {
        total = total.toExponential(4);
        return total;
    }
    return total;
})
const doMult = ((a, b) => {
    total = (+a * +b );
    if (total >= 1000000000|| total <= -1000000000) {
        total = total.toExponential(4);
        console.log(total);
        return total;
    }
    return total;
})
const doDiv = ((b, a) => {
    if (a === 0) {
        first = '';
        second = '';
        total = '';
        repeat = '';
        op = '';
        shown = '';
        output.innerHTML = '';
        sadCat.animate(sadIn, sadTimeIn);
        sadCat.animate(sadOut, sadTimeOut);
    } else {
        total = (+b / +a);
        total = total.toFixed(6)
        if (parseInt(total) >= 1000000000 || parseInt(total) <= -1000000000) {
            total = parseInt(total).toExponential(4);
            return total;
        }
        return total;}
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
    if (total >= 1000000000 || total <= -1000000000) {
        total = total.toExponential(4);
        return total;
    }
    return a;
})
const changeSignFirst = ((a) => {
    first = (+a * -1);
    if (first >= 1000000000 || first <= -1000000000) {
        first = first.toExponential(4);
        return first;
    }
    return a;
})

const toPercentFirst = ((a) => {
    first = ((+first/100)*a);
    if (first >= 1000000000 || first <= -1000000000) {
        first = first.toExponential(4);
        return first;
    }
    return first;
})

const toPercentJustFirst = ((a) => {
    first = (+a/100);
    if (first >= 1000000000 || first <= -1000000000) {
        first = first.toExponential(4);
        return first;
    }
    return first;
})

const toPercentTotal = ((a) => {
    total = (+a/100);
    if (total >= 1000000000 || total <= -1000000000) {
        total = total.toExponential(4);
        return total;
    }
    return total;
})

const display = document.querySelector('#display');
let output = document.createElement('div');
output.setAttribute('id', 'output');
display.appendChild(output);

const clear = document.querySelector('#clear');
clear.onclick = () => {
    pawLeft.animate(pawClear, pawTime);
    setTimeout (() => {
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
    }, 300)
};

const sign = document.querySelector('#sign');
sign.onclick = () => {
    pawLeft.animate(pawSign, pawTime);
    setTimeout (() => {
        if (first === '') {
            console.log(total)
            changeSignTotal(total);
            console.log(total)
            output.innerHTML = total;
        } else {
            changeSignFirst(first);
            output.innerHTML = first;
        }        
    }, 300)
}

const percentage = document.querySelector('#percentage');
percentage.onclick = () => {
    pawRight.animate(pawPercent, pawTime);
    setTimeout (() => {
        if (clear.innerHTML === 'AC') {
            toPercentTotal(total);
            output.innerHTML = total;
        } else if (second !== '') {
            toPercentFirst(first);
            output.innerHTML = first;
        } else {
            toPercentJustFirst(first);
            output.innerHTML = first;
        }        
    }, 300)
};

const divide = document.querySelector('#divide');
divide.onclick = (() => {
    pawRight.animate(pawDiv, pawTime);
    setTimeout (() => {
        if (clear.innerHTML === 'AC'){
            second = total;
            op = '/';
        } else if (second !== '') {
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
    }, 300)
})
const multiply = document.querySelector('#multiply');
multiply.onclick = (() => {
    pawRight.animate(pawMult, pawTime);
    setTimeout (() => {
        if (clear.innerHTML === 'AC'){
            second = total;
            op = '*';
        } else if (second !== '') {
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
    }, 300)
})
const subtract = document.querySelector('#subtract');
subtract.onclick = (() => {
    pawRight.animate(pawSub, pawTime);
    setTimeout (() => {
        if (clear.innerHTML === 'AC'){
            second = total;
            op = '-';
        } else if (second !== '') {
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
    }, 300)
})
const add = document.querySelector('#add');
add.onclick = (() => {
    pawBottom.animate(pawAdd, pawTime);
    setTimeout (() => {
        if (clear.innerHTML === 'AC'){
            second = total;
            op = '+';
        } else if (second !== '') {
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
    }, 300)
})

const equal = document.querySelector('#equal');
equal.onclick = () => {
    pawBottom.animate(pawEqual, pawTime);
    setTimeout (() => {
        if (first == '') {
            console.log(repeat);
            console.log(second);
            first = repeat;
            second = total;
            operate();
            output.innerHTML = total;
            first = '';
        } else if (first == '.') {
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
    }, 300)
}
const decimal = document.querySelector('#decimal');
decimal.onclick = (() => {
    pawBottom.animate(pawDecimal, pawTime);
    setTimeout (() => {
        if (first.includes('.')){
            return;
        } else {
            first += '.';
            shown = first;
            output.innerHTML = shown;
        }        
    }, 300)
});

const zero = document.querySelector('#zero');
zero.onclick = (() => {
    pawBottom.animate(pawZero, pawTime);
    setTimeout(() => {
    if (first.length <= 12) {
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
    }} else {
        return;
    }
    }, 300);
});

const one = document.querySelector('#one');
one.onclick = (() => {
    pawBottom.animate(pawOne, pawTime)
    if (first.length <=12) {
        setTimeout(() => {
            first += 1;
            shown = first;
            output.innerHTML = shown;
            clear.innerHTML = 'C';    
    }, 300)} 
    else {
        return;
    }  
    }
);

const two = document.querySelector('#two');
two.onclick = (() => {
    pawBottom.animate(pawTwo, pawTime);
    if (first.length <= 12) {
        setTimeout(() => {
            first += 2;
            shown = first;
            output.innerHTML = shown;
            clear.innerHTML = 'C';
        }, 300)} 
        else {
            return;
        }
    }
);

const three = document.querySelector('#three');
three.onclick = (() => {
    pawBottom.animate(pawThree, pawTime);
    if (first.length <= 12) {
        setTimeout (() => {
            first += 3;
            shown = first;
            output.innerHTML = shown;
            clear.innerHTML = 'C';  
        }, 300)}
    
});

const four = document.querySelector('#four');
four.onclick = (() => {
    pawLeft.animate (pawFour, pawTime);
    if (first.length <= 12) {
        setTimeout (() => {
            first += 4;
            shown = first;
            output.innerHTML = shown;
            clear.innerHTML = 'C';  
        }, 300)     
    }
});

const five = document.querySelector('#five');
five.onclick = (() => {
    pawLeft.animate(pawFive, pawTime);
    if (first.length <= 12){
      setTimeout (() => {
        first += 5;
        shown = first;
        output.innerHTML = shown;
        clear.innerHTML = 'C';
        }, 300)  
    }
});

const six = document.querySelector('#six');
six.onclick = (() => {
    pawRight.animate(pawSix, pawTime);
    if (first.length <= 12) {
        setTimeout (() => {
            first += 6;
            shown = first;
            output.innerHTML = shown;
            clear.innerHTML = 'C';
        }, 300)
    }
});

const seven = document.querySelector('#seven');
seven.onclick = (() => {
    pawLeft.animate(pawSeven, pawTime);
    if (first.length <= 12) {
        setTimeout (() => {
            first += 7;
            shown = first;
            output.innerHTML = shown;
            clear.innerHTML = 'C';
        }, 300)
        
    }
});

const eight = document.querySelector('#eight');
eight.onclick = (() => {
    pawLeft.animate(pawEight, pawTime);
    if (first.length <= 12) {
        setTimeout (() => {
            first += 8;
            shown = first;
            output.innerHTML = shown;
            clear.innerHTML = 'C';  
        }, 300)
    }
});

const nine = document.querySelector('#nine');
nine.onclick = (() => {
    pawRight.animate(pawNine, pawTime);
    if (first.length <= 12) {
        setTimeout (() => {
            first += 9;
            shown = first;
            output.innerHTML = shown;
            clear.innerHTML = 'C';
        }, 300)
    
    }
});
    
display.appendChild(sadCat);
sadCat.style.opacity = 0;

const sadIn = [
    {opacity: 0},
    {opacity: 1}
]

const sadOut = [
    {opacity: 1},
    {opacity: 0}
]

const sadTimeIn = {
    duration: 500,
    fill: 'forwards'
}
const sadTimeOut = {
    duration: 500,
    delay: 1300,
    fill: 'forwards'
}

const pawZero = [
    {transform: 'translate(400px, -40px)', offset: '0.5'},
    {transform: 'translate(-400px, 40px)'}
]
const pawOne = [
    {transform: 'translate(440px, -120px)', offset: '0.5'},
    {transform: 'translate(-440px, 120px)'}
]
const pawTwo = [
    {transform: 'translate(450px, -20px)', offset: '0.5'},
    {transform: 'translate(-450px, 20px)'}
]
const pawThree = [
    {transform: 'translate(470px, 80px)', offset: '0.5'},
    {transform: 'translate(-470px, -80px)'}
]
const pawFour = [
    {transform: 'translate(570px, 290px)', offset: '0.5'},
    {transform: 'translate(-570px, -290px)'}
]
const pawFive = [
    {transform: 'translate(630px, 220px)', offset: '0.5'},
    {transform: 'translate(-630px, -220px)'}
]
const pawSix = [
    {transform: 'translate(650px, -250px)', offset: '0.5'},
    {transform: 'translate(-650px, 250px)'}
]
const pawSeven = [
    {transform: 'translate(530px, 220px)', offset: '0.5'},
    {transform: 'translate(-530px, -220px)'}
]
const pawEight = [
    {transform: 'translate(600px, 160px)', offset: '0.5'},
    {transform: 'translate(-600px, -160px)'}
]
const pawNine = [
    {transform: 'translate(600px, -180px)', offset: '0.5'},
    {transform: 'translate(-600px, 180px)'}
]
const pawDecimal = [
    {transform: 'translate(440px, 90px)', offset: '0.5'},
    {transform: 'translate(-440px, -90px)'}
]
const pawEqual = [
    {transform: 'translate(440px, 190px)', offset: '0.5'},
    {transform: 'translate(-440px, -190px)'}
]
const pawAdd = [
    {transform: 'translate(500px, 190px)', offset: '0.5'},
    {transform: 'translate(-500px, -190px)'}
]
const pawClear = [
    {transform: 'translate(480px, 170px)', offset: '0.5'},
    {transform: 'translate(-480px, -170px)'}
]
const pawSign = [
    {transform: 'translate(600px, 110px)', offset: '0.5'},
    {transform: 'translate(-600px, -110px)'}
]
const pawPercent = [
    {transform: 'translate(600px, -120px)', offset: '0.5'},
    {transform: 'translate(-600px, 120px)'}
]
const pawDiv = [
    {transform: 'translate(500px, -180px)', offset: '0.5'},
    {transform: 'translate(-500px, 180px)'}
]
const pawMult = [
    {transform: 'translate(520px, -250px)', offset: '0.5'},
    {transform: 'translate(-520px, 250px)'}
]
const pawSub = [
    {transform: 'translate(550px, -290px)', offset: '0.5'},
    {transform: 'translate(-550px, 290px)'}
]
const pawTime = {
    duration: 600,
    fill: 'forwards'
}