/**
 Problem 3: Is Less or Greater than seven

তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  

এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

Input : 6
Output: -1

Input: -15
Output: -22

Input: 15
Output: 30
 */

/*
This function name is isLGSeven() and it takes number type input.
If input number is not equal to number then it show a error massage.
if-else condition are used to solve this problem.
*/

function isLGSeven(num){
    
        if(typeof num != 'number'){
            return "provide valid number";
        }
    let number=num-7;
    if(number<7){
        return number;
    }
    else{
        return num*2;
    }
}

let result=isLGSeven(15);
console.log(result);
