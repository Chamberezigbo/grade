"use script"

let creditUnit = 25 ;

let grade = creditUnit >= 80 && creditUnit == 100 ? "A" : creditUnit >= 75 && creditUnit < 80  ? "B" :
   creditUnit >= 60 && creditUnit < 75 ? "C" : creditUnit >= 45 && creditUnit < 60 ? "D" :
   creditUnit >= 30 && creditUnit < 45 ? "E" : 
   creditUnit >= 0 ? "f" : "Not valid" ;

console.log(grade)
