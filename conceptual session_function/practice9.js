var myDays = 25;

var first1To10Days = 500;
var second11To20Days = 300;
var third21ToAnyDays = 100;

if (myDays <= 10) {
  var totalCost = myDays * 500;
  console.log(totalCost);
} else if (myDays <= 20 && myDays > 10) {
  var frist10daysCost = 10 * 500;
  var remainingDys = myDays - 10;
  var totalDaysCost = remainingDys * 300;
  var total11To20DAyscost = frist10daysCost + totalDaysCost;
  console.log(total11To20DAyscost);
} else {
  var first1To10Days = 500 * 10;
  var second11To20Days = 300 * 10;
  var remainingDys = myDays - 20;
  var thirdinifinityDays = remainingDys * 100;
  var totoalAbove20DaysCost =
    first1To10Days + second11To20Days + thirdinifinityDays;
  console.log(totoalAbove20DaysCost);
}