var flag = true;
var theme = true;
function changeTheme(){
    if(theme){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        theme = false;
    }else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        theme = true;
    }
}
function clearDisplay(){
    let input = document.querySelector('.calculator_display');
    input.value = "";
}
function addDigit(digit){
    let input = document.querySelector('.calculator_display');
    if(flag==true){
    input.value += digit;
    }
    else{
        input.value = digit;
        flag = true;
    }
}
function changeSign(){
    let input = document.querySelector('.calculator_display');
    input.value = input.value * -1;
    flag = true;
}
function percent(){
    let input = document.querySelector('.calculator_display');
    input.value = input.value / 100;
    
}
function addDot(){
    let input = document.querySelector('.calculator_display');
    input.value += ".";
}
function equals(){
    let input = document.querySelector('.calculator_display');
    input.value = eval(input.value);
    flag = false;
}
function add(){
    let input = document.querySelector('.calculator_display');
    input.value += "+";
    flag = true;
}
function subtract(){
    let input = document.querySelector('.calculator_display');
    input.value += "-";
    flag = true;
}
function multiply(){
    let input = document.querySelector('.calculator_display');
    input.value += "*";
    flag = true;
}
function divide(){
    let input = document.querySelector('.calculator_display');
    input.value += "/";
    flag = true;
}
function backspace(){
    let input = document.querySelector('.calculator_display');
    input.value = input.value.substring(0, input.value.length - 1);
}