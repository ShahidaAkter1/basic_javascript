/**
 * You are given a triangle with the sides 9,8,9.Write a program to check wheather a triangle is issosceles or not using if-else.
 *     Isosceles => two sides are equal
 
 */
var a=9;
var b=8;
var c=9;
if(a==b){
    console.log("triangle is a Issosceles");
}
else if(a==c){
    console.log("triangle is a Issosceles");
}
else if(b==c){
    console.log("triangle is a Issosceles");
}
else{
    console.log("triangle is not a Issosceles");
}


//2nd way
var side1=9;
var side2=8;
var side3=9;
if(side1 ==side2 || side1 == side3 || side2 ==side3){
    console.log('isosceles');
}