/**
 ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।


Sample Data:

Input:
10
25
199

Output:
572.96
1432.39
11401.86
 */

//1rad * 180/3.1416
function radianToDegree(radian){
    if(typeof radian != 'number'){
        return "provide valid number";
    }
    const PI= 3.1416;
    const degree = (radian * (180/PI)).toFixed(2);

    return degree;
}
let result =radianToDegree(10);
console.log(result);