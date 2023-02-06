/*
এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।

ইনপুটঃ [-1,2,-3,4,5,6,-7,8,-9,10]


আউটপুটঃ 3
*/

// let input= [-1,2,-3,4,5,6,-7,8,-9,10];

// if(input<=5){
//     console.log("Yes");
// }
// else{
//     console.log("Yes");
// }

//2nd way

// let numbers=[-1,2,-3,4,5,6,-7,8,-9,10];

// let count= 0;

// for(let i=0;i<numbers.length;i++){
//     const element = numbers[i];
//     // console.log(element);
//     if(element>5){
//         // console.log("yes");
//         count++;
//     }
//     else{
//         // console.log("no");
//     }
// }
// console.log(count);


//3rd way

function greaterThan5(numbers){
    let count = 0;
    for(let i=0;i<numbers.length;i++){
        const element=numbers[i];
        if(element>5){
            count++;
          
        }
    }
    return count;
}
let numbers= [-1,2,-3,4,5,6,-7,8,-9,10];
 let number=greaterThan5(numbers);
 console.log(number);