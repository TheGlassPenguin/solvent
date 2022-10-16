// JavaScript Document
function getinput() {
input = document.getElementById("inputbox").value;
}

function showresult() {
 neatoutput = "" + input + " = " + solution;
 result.innerText = neatoutput
}

function showconversionresult() {
 neatoutput = "" + input + " -> " + solution;
 result.innerText = neatoutput
}

function solve() {
getinput();
solution = math.evaluate(input);
showresult();
}

function simplify() {
getinput();
solution = math.simplify(input).toString();
showconversionresult();
}
 
function fraction2decimal() {
	getinput();
	solution = math.number(math.fraction(input));
	showconversionresult()
}

function decimal2fraction() {
	getinput();
	solution =  math.fraction(math.number(input));
	showconversionresult();
}

function round() {
	getinput()
	solution = math.round(input);
	showconversionresult();
}
