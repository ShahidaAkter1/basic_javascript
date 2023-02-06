/**
 * Peter's school teacher asked him to write a program that would return true if a number is even and false if a number is odd.Help Peter write the pogram.
 * Input: The first and second input lines contain the numbers.
 * Output: Print true if the number is an even number and false if the number is odd number.
 */

function iseven(number){
    const remainder = number %2;
    //console.log(remainder);
    if (remainder == 0){
        // console.log('number is even');or
        return true;
    }
    else{
        // console.log('number is odd');or
        return false;
    }
}

// iseven(309);
// iseven(308);
const myNumberIsEven = iseven(383);
console.log(myNumberIsEven);
const herNumberIsEven = iseven(1244);
console.log(herNumberIsEven);
