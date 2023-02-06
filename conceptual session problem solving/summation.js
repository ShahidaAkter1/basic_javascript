/** 1 to n
 * 1+2+3+....+n
 */

//normal summation

// let num1 = 1;
// let num2= 2;

// let sum=0;
//  sum = num1+num2;
//  console.log(sum);

let n=10;
let sum=0;
for (let i=1; i<=n; i++){
    sum = sum+i;

}
console.log(sum);

//or
let sum2=(n*(n+1))/2;
console.log('sum:',sum2);