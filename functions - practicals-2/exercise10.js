// Write a function that calculates the number of appearances of a letter a in a given string. Modify the function so it calculates the number of both letters a and A.



function numberOfLetters(s,l) {

    var counter=0;

    s = s.toUpperCase();
    l = l.toUpperCase();
     
     for (i = 0; i < s.length; i++) {
 
         if(s[i] === l) {
 
             counter= counter + 1;
         }
     }
 
     return counter;
 
 }
 
 console.log(numberOfLetters("My random string", "m"));