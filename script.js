// task_1

const textSpan = document.getElementById('text1');
const textInput = document.getElementById('inText');

function printInput(){

    textSpan.textContent = textSpan.textContent + ', ' + textInput.value;
}

// task_2

const pass1 = document.getElementById('Pass_1');
const pass2 = document.getElementById('Pass_2');
const span = document.getElementById('text2');

function comparePass(){
    if(pass1.value === pass2.value) {
        span.textContent = 'Equal'
    } else {
        span.textContent = 'Not equal'
    }
}

// task_3
const num = document.getElementById('text3');
function randomNum(){
    num.textContent = Math.random();
}

