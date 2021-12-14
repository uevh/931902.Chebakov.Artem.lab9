const input1 = document.getElementById('input');
const input2 = document.getElementById('input2');
let zero = 0;
let k = 0;
let z = 0;
input2.innerText = "0 ";

function add(e) {
    if ((input2.innerText[input2.innerText.length - 1] === ' ') && e.match(/[0-9]/)) {
        input1.value += e;
        k = 0;
        input2.innerText = e;
    } else if ((input2.innerText[input2.innerText.length - 1] === ' ') && e === '.') {
        input1.value += '0' + e;
        input2.innerText = '0' + e;
        k++;
        z++;
    }
    else if (e.match(/[1-9]/)) {
        input1.value += e;
        input2.innerText += e;
        k = 0;

    } else if (k === 0 && e !== '.') {
        input1.value += ' ' + e + " ";
        input2.innerText = e + " ";
        z = 0;
        k++;

    } else if (k === 0 && z === 0) {
        input1.value += e;
        input2.innerText += e;
        z++;
        k++;
    }
}

function equal() {
    input1.value = eval(input1.value);
    input2.innerText = eval(input1.value);
}

function clear_All() {
    input1.value = '';
    input2.innerText = "0 ";
    k = 0;
    z = 0;
}

function clear_One() {
    if (input1.value.length - 1) {
        if (input1.value[input1.value.length - 1] === '.') {
            k=0;
            z = 0;
            input1.value = input1.value.substring(0, input1.value.length - 1);
            input2.innerText = input2.innerText.substring(0, input2.innerText.length - 1);
        } else if (input1.value[input1.value.length - 2].match(/[0-9]/)) {
            k = 0;
            input1.value = input1.value.substring(0, input1.value.length - 1);
            input2.innerText = input2.innerText.substring(0, input2.innerText.length - 1);
        } else if (input1.value[input1.value.length - 2] === ' ') {
            k = 1;
            input1.value = input1.value.substring(0, input1.value.length - 1);
            input2.innerText = input2.innerText.substring(0, input2.innerText.length - 1);

        } else if (input1.value[input1.value.length - 2] !== '.') {
            k = 0;
            z = 0;
            input1.value = input1.value.substring(0, input1.value.length - 3);
            input2.innerText = input2.innerText.substring(0, input2.innerText.length - 1);

        } else {
            k = 0;
            z = 1;
            input1.value = input1.value.substring(0, input1.value.length - 1);
            input2.innerText = input2.innerText.substring(0, input2.innerText.length - 1);

        }

    } else {
        input2.innerText = '0 ';
        input1.value = '';
    }
}