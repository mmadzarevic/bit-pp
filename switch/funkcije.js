// input:2 numbers
// output: sum
// name: addition

function addition(a, b) {
    var sum;
    sum = a + b;
    return sum;
}


var s = addition(3, 4)

console.log(s);

function input(a) {
    return true;

}

console.log(input('String'));


//input: s 
//output: true/false

function ifBlank(s) {
    if (s === ' ') {
        return true;
    }
    else {
        return false;
    }

}

var result = ifBlank(" ");
console.log(result);




function repeatString(string, n) {
    var newString = "";

    for (var i = 0; i < n; i++) {
        newString = newString + string;
    }
    
    return newString;
}

console.log(repeatString("HA", 3));


function countNumber(word){
    var Numbers =

}

function nl (s,l){
    var counter=0;
    for( i=0; i<s.length; i++){
        if(s[i]===l){
            counter=counter+1;
        }
    }
    return counter;
}

console.log(nl('My random string','n'));

function firstNumeration(string, n){
counter=0;
for (i=0; i<string.length;i++){
    if(string[i]===n){
        counter+=i;
        break;
    }
}
    return counter;
}

console.log(firstNumeration('My random string','n'));











