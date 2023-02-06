/**
 * ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 
 */

let num1=50;
let num2=20;
if(num1>num2){
    console.log("number1 is greater than number2");
}
else if(num1<num2){
    console.log("number2 is greater than number1");
}
// else if(num1<=num2){
//     console.log("number2 is greater than number1");
// }
// else if(num1>=num2){
//     console.log("number1 is greater than number2");
// }
else if(num1=num2){
    console.log("number1 & number2 are equal");
}
else if(num1!=num2){
    console.log("number1 & number2 are not equal");
}
else{
    console.log('take valid input');
}