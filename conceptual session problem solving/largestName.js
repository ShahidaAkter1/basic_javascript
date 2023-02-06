/**
 তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।

 suad
 shahida--->reverse(adihahs)
 */


 //1st way ..using if-else

//  let name1 = 'suad';
//  let name2 = 'shahida';

//  let friendOneLength = name1.length;
//  let friendTwoLength =name2.length;

//  if(friendOneLength>friendTwoLength){
//     console.log(name1.split("").reverse().join(""));
//  }
//  else{
//     console.log(name2.split("").reverse().join(""));
//  }


//2nd way....using function
 function reverseName(name1,name2){
    let friendOneLength = name1.length;
 let friendTwoLength =name2.length;

 if(friendOneLength>friendTwoLength){
   return (name1.split("").reverse().join(""));
 }
 else{
    return (name2.split("").reverse().join(""));
 }

 }
 let result = reverseName('suad', 'shahida');
 console.log(result);


 //3rd way
 let str = 'shahida';

//  for(let i=0; i<str.length;i++){
//     const element= str[i];
//     console.log(element)
//  }
let reversedString="";
 for(let i=str.length-1; i>=0;i--){
    const element= str[i];
    // console.log(element);
    reversedString=reversedString+element;
 }
 console.log(reversedString)