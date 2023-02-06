/**
 * Write a function findOddSum() that will take the array [5,7,8,10,45,30] as the input parameter and return the sum of the odd numbers.
 */


//
// function findOddSum(numbers){
//     console.log(numbers);
// }
// const myNumbers = [12,43,56,91,23,65];
// findOddSum(myNumbers);

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
        console.log(index,element);
        oddNumbers.push(element);
    }
    
}
return oddNumbers;
}

const myNumbers = [12,34,56,76,89,91,23];
const oddNumbers=  getOddNumberOffAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(myNumbers);
console.log('odd number sum', oddNumberSum);