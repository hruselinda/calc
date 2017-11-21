
function numwrite() {
    cleanUp();
    document.getElementById("display").innerHTML += this.dataset.num;
} 

function symwrite() {
    cleanUp();
    var x = document.getElementById("display").innerHTML;
    var lastSymbol = x.slice(-1);
    var result = isItSymbol(lastSymbol);
    if (result === false) {
        document.getElementById("display").innerHTML += this.dataset.num;
        dotWritten = false;
    }
} 

function dotwrite() {
    cleanUp();
    var x = document.getElementById("display").innerHTML;
    var lastSymbol = x.slice(-1);
    var result = isItSymbol(lastSymbol);
    if (result === false && dotWritten === false) {
        document.getElementById("display").innerHTML += ".";
        dotWritten = true;
    }
} 

function cleanUp() {
     if(document.getElementById("display").innerHTML == "You can count on me" ||
            document.getElementById("display").innerHTML == "This is too much, mate ..." ||
            document.getElementById("display").innerHTML == "Infinity") {
            document.getElementById("display").innerHTML = "";
    }
    //dotWritten = false;
}

function myResult() {
    var x = document.getElementById("display").innerHTML;
    var result = x.substr(0, (x.length -1));
    document.getElementById("display").innerHTML = result;
}

function cleanC(){
    document.getElementById("display").innerHTML = "";
    dotWritten = false;
}

function equals(){
    cleanUp();
    var x = document.getElementById("display").innerHTML;
    var lastSymbol = x.slice(-1);
    
    if (document.getElementById("display").innerHTML != "" && !isItSymbol(lastSymbol)){
        var answer = eval(x);
        document.getElementById("display").innerHTML = answer;
    } 
    //dotWritten = false;
}

function isItSymbol(t){
    var sym = ["+", "-", "*", "/", ".", ""];
    var symbol = sym.indexOf(t);
    if (symbol == -1) {
      return false;
    } else {
        return true;
    }
}


function removeClassDisabled(){
    var disabledbtns = document.getElementsByClassName("disabled");
    if (disabledbtns.length > 0) {
       disabledbtns[0].className = disabledbtns[0].className.replace("disabled","");
    }
 }