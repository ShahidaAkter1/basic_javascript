/*  
  3.ধরো  তুমি  হটাৎ  একদিন  দোকান এ গিয়ে  চাল,ডাল ,তেল   কিনলা  এখন  এমন  একটা  ফাঙ্কশন  লিখতে  হবে  যাকে এই  তিনটা জিনিসের  ক্রয়  মূল্য  বলে  দিলেই  টোটাল  কত  টাকা কিনছো এইটা  বলে  দিবে ।
*/

function sum(num1,num2,num3){
    var result= num1+num2+num3 ;
    return result;
}

var totalPrice=sum(30,45,100);
console.log(totalPrice);