"use script"

let creditUnit = 25;

let grade = creditUnit >= 80 && creditUnit == 100 ? "A" : creditUnit >= 75 ? "B" :
   creditUnit >= 60 ? "C" : creditUnit >= 45 ? "D" : creditUnit >= 30 ? "E" : 
   creditUnit >= 0 ? "f" : "Not valid" ;

console.log(grade)
