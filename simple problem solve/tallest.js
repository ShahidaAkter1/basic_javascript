function maxInArray(numbers){
    let largest = numbers[0];
for(let i=0; i<numbers.length; i++){
    const index = i;
    const element = numbers[index];
    // console.log(element);
    if(element>largest){
        largest = element;
    }
  
 }
 return largest;
}
const height = [167,190,120,165,137,2569];
const tallest = maxInArray(height);
console.log('tallest person is:', tallest);