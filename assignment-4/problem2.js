/**
 Problem 2: Finding even or odd

তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 

এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input & Output:

Input: ‘Phero’
Output: odd

Input: ‘Batch7’
Output: even

Input: ‘chatgpt’
Output: odd
 */
/*
This function name is evenOdd() and it takes string type input.
If input number is not equal to string then it show a error massage.
if-else condition are used to solve this problem.
*/

function evenOdd(String){
    
        if(typeof String != 'string'){
            return "provide valid number";
        }
   if(String.length%2==0){
    return "even";
   }
   else{
    return "odd";
   }
}
let result = evenOdd("shahida Akter");
console.log(result);