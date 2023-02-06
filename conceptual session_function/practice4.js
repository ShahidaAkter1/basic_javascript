/**
 * 4.	এমন  একটা  ফাঙ্কশন  লিখবে  যাকে  তুমি কিলোমিটার  দিলে  সে  তোমাকে এ মাইল এ কনভার্ট  করে  দিবে 
 */
function kmToMiles(km){
    var miles = km* 0.62;
    return miles;
}

var result = kmToMiles(12);
console.log(result);