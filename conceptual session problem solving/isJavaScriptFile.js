/**
 ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।


Sample Data:

Input:
'app.js'
'js.png'
'image.js.png'
'image.jpg.js'

Output:
true
false
false
true
 */

function isJavaScriptFile(fileName){
    if(typeof radian != 'string' || fileName.length ==0){//validation korte bolle ai part korte hobe
        return "provide valid number";
    }
// console.log(fileName)
if(fileName.endsWith(".js")){
    // console.log("yes");
    return true;
}
else{
    // console.log("no");
    return false;
}
}
let result =isJavaScriptFile("index.html");
console.log(result);

//2nd Way
// function isJavaScriptFile(fileName){
//     if(str[str.length-1] == 's'){
//             if(str[str.length-2] == 'j'){
                
//                     if(str[str.length-3] == '.'){
        
//         return true;
//     }
// }
//             }
//     else{
        
//         return false;
//     }
//     }
//     let result =isJavaScriptFile("index.html");
//     console.log(result);