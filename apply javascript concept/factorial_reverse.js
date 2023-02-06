//1*2*3*4*5*6*7

function factorial(number){
    let result =1;
    for(let i=number; i>=1; i--){
        console.log(i)
        result = result*i;
    }
    return result;
}
factorial(9)//9-1 print hobe
const result = factorial(9);
console.log('factorial no:',result);