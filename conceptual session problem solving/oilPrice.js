/**
 ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।

প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
প্রতি লিটার পেট্রোল এর দাম – 130 টাকা
প্রতি লিটার অকটেনের এর দাম – 135 টাকা

এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের  অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে  হলো সেই সংখ্যা রিটার্ন করতে হবে।

.

Sample Data:

Input:
1, 1, 1
30, 20, 10
1,0,2
0,2,3
Output:
379
7370
384
665

 */

function oilPrice(diselAmount,petrolAmount,octenAmount){
    const disel=114;
    const petrol=130;
    const octen=135;
  
    const diselTotalPrice= disel* diselAmount;
    const petrolTotalPrice= petrol* petrolAmount;
    const octenTotalPrice= octen* octenAmount;

    const totalPrice = diselTotalPrice + petrolTotalPrice + octenTotalPrice;
     return totalPrice;
}

let total= oilPrice(30,20,10);
console.log(total);