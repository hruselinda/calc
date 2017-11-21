
var charCodes = {
    42: "*",
    43: "+",
    44: "", // ....
    45: "-",
    46: ".",
    47: "/",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9"
};

var dotWritten = false;

var numbtns = document.getElementsByClassName("numbtn");
for (i = 0; i < numbtns.length; i++) {
    document.getElementsByClassName("numbtn")[i].addEventListener("click", numwrite);
}

var symbtns = document.getElementsByClassName("symbtn");
for (i = 0; i < symbtns.length; i++) {
    document.getElementsByClassName("symbtn")[i].addEventListener("click", symwrite);
}

document.getElementById("dot").addEventListener("click", dotwrite);
document.getElementById("equal").addEventListener("click", equals);
document.getElementById("clean").addEventListener("click", cleanC);
document.getElementById("back").addEventListener("click", myResult);


document.getElementById("log").addEventListener("click", function(){
    cleanUp();
    var x = document.getElementById("display").innerHTML;
    var lastSymbol = x.slice(-1);
    
    if (document.getElementById("display").innerHTML != "" && !isItSymbol(lastSymbol)){
        var answer = eval(x);
        var logAnswer = Math.log(answer);
        if (isNaN(logAnswer) === true) {
            document.getElementById("display").innerHTML = "This is too much, mate! ...";
        } else {
        document.getElementById("display").innerHTML = logAnswer;
    }
    } 
});

document.getElementById("root").addEventListener("click", function(){
    cleanUp();
    var x = document.getElementById("display").innerHTML;
    var lastSymbol = x.slice(-1);
    
    if (document.getElementById("display").innerHTML != "" && !isItSymbol(lastSymbol)){
        var answer = eval(x);
        document.getElementById("display").innerHTML = Math.sqrt(answer);
    } 
});

document.getElementById("sine").addEventListener("click", function(){
    cleanUp();
    var x = document.getElementById("display").innerHTML;
    var lastSymbol = x.slice(-1);
    
    if (document.getElementById("display").innerHTML != "" && !isItSymbol(lastSymbol)){
        var answer = eval(x);
        document.getElementById("display").innerHTML = Math.sin(answer);
    } 
});

document.getElementById("cosine").addEventListener("click", function(){
    cleanUp();
    var x = document.getElementById("display").innerHTML;
    var lastSymbol = x.slice(-1);
    
    if (document.getElementById("display").innerHTML != "" && !isItSymbol(lastSymbol)){
        var answer = eval(x);
        document.getElementById("display").innerHTML = Math.cos(answer);
    } 
});

document.getElementById("tangent").addEventListener("click", function(){
    cleanUp();
    var x = document.getElementById("display").innerHTML;
    var lastSymbol = x.slice(-1);
    
    if (document.getElementById("display").innerHTML != "" && !isItSymbol(lastSymbol)){
        var answer = eval(x);
        document.getElementById("display").innerHTML = Math.tan(answer);
    } 
});



document.getElementById("onoff").addEventListener("click", function () {
    if (this.innerHTML == "ON") {
        // turn on the calc
        var count = document.getElementsByClassName("disabled").length;
        for (i = 0; i < count; i++) {
            removeClassDisabled();
        }
        this.innerHTML = "OFF";
        document.getElementById("display").innerHTML = "You can count on me";
        setTimeout(cleanC, 1500);
        //dotWritten = false;
    } else {
        // turn off the calc
        var allbtns = document.getElementsByTagName("button");
        for (i = 0; i < allbtns.length; i++) {
            if (allbtns[i].id != "onoff") {
                allbtns[i].className += " disabled";
            }
        }
        cleanC();
        this.innerHTML = "ON";
        document.getElementById("display").innerHTML = "See you later";
        setTimeout(cleanC, 1500);
    }
});

document.addEventListener("keypress", function (event) {
    event.preventDefault();
    if (event.charCode == 0) {
        // do a function with a button
        if (event.keyCode == 8) {
            myResult();
        }
        if (event.keyCode == 13) {
            equals();
        }
        if (event.keyCode == 27 || event.keyCode == 46) {
            cleanC();
            dotWritten = false;
        }

    } else if (event.charCode > 41 && event.charCode < 48) {
        // write a symbol/operator
        cleanUp();
        if (event.charCode == 46) {
            dotwrite();
        } else {
            console.log(event.charCode);
            var x = document.getElementById("display").innerHTML;
            var lastSymbol = x.slice(-1);
            var result = isItSymbol(lastSymbol);
            if (result === false) {
                document.getElementById("display").innerHTML += charCodes[event.charCode];
                dotWritten = false;
            }
        }

    } else if (event.charCode > 47 && event.charCode < 58) {
        document.getElementById("display").innerHTML += charCodes[event.charCode];
    }
    // write a digit
});

/*
 * TODO
 * known bugs :
 *  - we can not write . after back or equal button clicked/pressed if the variable dotWritten is true
 */