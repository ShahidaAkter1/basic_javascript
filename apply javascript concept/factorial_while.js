//1*2*3*4*5*6*7

function factorial(number){
    
    let num=1;
    let result =1;
    
     while(num<=7){
        // console.log(num);
        result = result*num;
        num++;
    }
    return result;
}
factorial(9)//9-1 print hobe
const result = factorial(9);
console.log('factorial no:',result);