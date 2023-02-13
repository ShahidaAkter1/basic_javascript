/**
 Problem 1: Let’s play a mind game:
তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")

এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে

Sample Input & Output:

Input: 5
Output: 7.5

Input: 50
Output: 75

Input: 33
Output: 49.5
 */

/* Description:
This function name is mindGame and it takes positive number.
If input number is not equal to number then it show a error massage.
 Arithmatic operations are used to solve this problem.
*/
function mindGame(num){
    
        if(typeof num != 'number'){
            return "provide valid number";
        }
    let number=((((num*3)+10)/2)-5);
    return number;
}

let result=mindGame(33);
console.log(result);