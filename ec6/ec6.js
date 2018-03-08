
// zadatak 1

function capitalize(...args) {
    let strings = args.filter(function (element) {
        return typeof element === 'string';
    });

    let newArr = [];
    strings.forEach(function (e, i) {
        let newElement = e.charAt(0).toUpperCase() + e.slice(1);
        newArr.push(newElement);
    })

    return newArr;
}

console.log(capitalize('hello', 'summer', 'spring', 6));



// zadatak 2

const x = 0.2;
function tax(n) {
    return parseInt(n * x);
}
console.log(tax(120));



// zadatak 3

let a = [4, 6, 11, -9, 2.1];

let b = a.map(function (e) {
    return e + 2;
})
console.log(b);



// zadatak 4

let y = [6, 11, 9, 0, 3];

let even = y.filter(function (e) {
    return e % 2 == 0;
})
console.log(even);



// zadatak 5

let v =  ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'];

let sub = v.filter(function(e){
    return e.toLowerCase().includes("js");
})
console.log(sub);

// zadatak 6

let y = [6, 11.3, 9.5, 0, 3]; 

let intOfY = y.filter(function(e){
    return Number.isInteger(e);
})
console.log(intOfY);

//zadatak 7

let y = [6, 11.3, 9.5, 0, 3, 35]; 

let intOfY = y.filter(function(e){
    return Number.isInteger(e) && String(e).includes('5');
})
console.log(intOfY);


//zadatk 8

let y = [6, 11.3, 9.5, 0, 3, 35]; 

let intOfY = y.filter(function(e,index){
    return e[index]>10;
})
console.log(intOfY);

function a(...args) {
    console.log(args);
}
a(5,4,6);













