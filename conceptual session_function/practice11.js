/**
 * Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
as the input parameter and will return the sum of the odd numbers.
 */

function getSumOfAnArray(numbers){
    let sum=0;

    for(let i=0; i< numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum= sum + element;
      //  console.log(index,element,sum);
    }
    return sum;
}

function getOddNumberOffAnArray(numbers){
    const oddNumbers = [];
for(let i=0;i<numbers.length; i++){
    const index=i;
    const element= numbers[index];
    if(element % 2 ===1){
       // console.log(index,element);
        oddNumbers.push(element);
    }
    
}
return oddNumbers;
}

const myNumbers =  [5, 7, 8, 10, 45, 30];
const oddNumbers=  getOddNumberOffAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(myNumbers);
console.log('odd number sum', oddNumberSum);