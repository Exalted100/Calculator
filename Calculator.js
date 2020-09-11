//variables for all DOMs
let clear = document.getElementById("clear");
let add = document.getElementById("plus");
let subtract = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let point = document.getElementById("point");
let equals = document.getElementById("equals");
let input = document.getElementById("input");
let output = document.getElementById("output");

//FUNCTIONS!

//function to clear the input and output
function clearInput() {
    input.value = "";
    output.value = "";
}

//function to calculate
function calculate() {
    let result = eval(input.value);
    output.value = result;
}

//function for when plus button is clicked
function plusClick() {
    input.value = input.value + "+";
}

//function for when minus button is clicked
function minusClick() {
    input.value = input.value + "-";
}

//function for when multiply button is clicked
function multiplyClick() {
    input.value = input.value + "*";
}

//function for when divide button is clicked
function divideClick() {
    input.value = input.value + "/";
}

//function for when zero button is clicked
function zeroClick() {
    input.value = input.value + "0";
}

//function for when one button is clicked
function oneClick() {
    input.value = input.value + "1";
}

//function for when two button is clicked
function twoClick() {
    input.value = input.value + "2";
}

//function for when three button is clicked
function threeClick() {
    input.value = input.value + "3";
}

//function for when four button is clicked
function fourClick() {
    input.value = input.value + "4";
}

//function for when five button is clicked
function fiveClick() {
    input.value = input.value + "5";
}

//function for when six button is clicked
function sixClick() {
    input.value = input.value + "6";
}

//function for when seven button is clicked
function sevenClick() {
    input.value = input.value + "7";
}

//function eight when zero button is clicked
function eightClick() {
    input.value = input.value + "8";
}

//function for when nine button is clicked
function nineClick() {
    input.value = input.value + "9";
}

//function for when point button is clicked
function pointClick() {
    input.value = input.value + ".";
}

//EVENTS!

//Event to run when "C" is clicked
clear.onclick = function() {clearInput()};

//Event to run when equals to is clicked
equals.onclick = function() {calculate()};//{calculate()};

//Event to run when plus button is clicked
add.onclick = function() {plusClick()};

//Event to run when minus button is clicked
subtract.onclick = function() {minusClick()};

//Event to run when multiply button is clicked
multiply.onclick = function() {multiplyClick()};

//Event to run when divide button is clicked
divide.onclick = function() {divideClick()};

//Event to run when zero button is clicked
zero.onclick = function() {zeroClick()};

//Event to run when one button is clicked
one.onclick = function() {oneClick()};

//Event to run when two button is clicked
two.onclick = function() {twoClick()};

//Event to run when three button is clicked
three.onclick = function() {threeClick()};

//Event to run when four button is clicked
four.onclick = function() {fourClick()};

//Event to run when five button is clicked
five.onclick = function() {fiveClick()};

//Event to run when six button is clicked
six.onclick = function() {sixClick()};

//Event to run when seven button is clicked
seven.onclick = function() {sevenClick()};

//Event to run when eight button is clicked
eight.onclick = function() {eightClick()};

//Event to run when nine button is clicked
nine.onclick = function() {nineClick()};

//Event to run when point button is clicked
point.onclick = function() {pointClick()};