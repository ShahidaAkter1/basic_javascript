/**
 * Write a function to get the lowest number in an array
 */
function minInArray(numbers){
    let lowest = numbers[0];
for(let i=numbers.length;i>=0; i--){
    const index = i;
    const element = numbers[index];
    // console.log(element);
    if(element<lowest){
        lowest = element;
    }
  
 }
 return lowest;
}
const height = [167,190,120,165,137,2569];
const lowest = minInArray(height);
console.log('lowest person is:', lowest);

//hoi nai