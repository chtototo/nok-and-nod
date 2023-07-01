function getNumbers() {
    let first_number = document.getElementById('num_1').value;
    let second_number = document.getElementById('num_2').value;
    let array = [first_number, second_number];
    return array
}

function showErrors() {
let first = getNumbers()[0];
let second = getNumbers()[1];
if (first > 1) {
    document.getElementById('num_1').style='border-color: black; border-width: 1.7px;';
}else{
    document.getElementById('num_1').style='border-color: red; border-width: 1.7px;';
}
if (second > 1) {
    document.getElementById('num_2').style='border-color: black; border-width: 1.7px;';
}else{
    document.getElementById('num_2').style='border-color: red; border-width: 1.7px;';
}
}

function nod() {
let first = getNumbers()[0];
let second = getNumbers()[1];
showErrors();
if ((first > 1) & (second > 1)) {
    for (let i = 2; i < Math.min(first, second)+1; i++) {
        if ((first % i == 0) & (second % i == 0)) {
            var result = i;
            break
        }
    }
    if (result == undefined) {
        result = 'not found';
    }
    document.getElementById('result').innerHTML=result;
}
}

function nok() {
let first = getNumbers()[0];
let second = getNumbers()[1];
showErrors();
if ((first > 1) & (second > 1)) {
    for (let i = Math.max(first, second); i < first * second + 1; i++) {
        if ((i % first == 0) & (i % second == 0)) {
            var result = i;
            break
        }
    }
    
    document.getElementById('result').innerHTML=result;
}
}