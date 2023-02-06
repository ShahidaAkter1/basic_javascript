/**
 এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে।
 
 */
function mililiterToLiter(volume){
    let liter= volume / 1000;
    return liter;
}

let result=  mililiterToLiter(1000);
console.log(result);