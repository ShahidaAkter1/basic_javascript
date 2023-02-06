/**
 * friende result:
 * My result=85
 * 
 * grading chart: 
 *     80 or above A grade
 *     60 or above B grade
 *     50 or above C grade
 *     40 or above D grade
 *     39 or less => F grade
 * Write a program to find your and your friends grades using if-else.
 */
var myResult=85;
// var tom=40;
// var jane=66;
// var petel=95;
// var john=56;
if(80<=100){
    console.log("The grade is A+");
}
else if(60<=79){
    console.log("The grade is B+");
}
else if(50<=59){
    console.log("The grade is C+");
}
else if(40<=49){
    console.log("The grade is D+");
}
else if(39<=0){
    console.log("The grade is F");
}
else{
    console.log("Cannot attend the examination");
}

//2nd way
var marks=85;
if(marks>=80 && marks<=100){
    console.log("Grade is A");
}

else if(marks>=60 && marks<70){
    console.log("Grade is  B");
}
else{
    console.log("failed in the exam");
}
