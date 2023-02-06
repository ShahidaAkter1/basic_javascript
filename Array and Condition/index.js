var number = [45,68,78,89,98];
console.log(number);//full array dhekhar jonno

//get element by index

console.log(number[0]);//ata 1st no index ar value dhekhabe cz index 0 theke suru hoi.....45ans
console.log(number[3]);//ata 4 no index ar value dhekhabe.....89ans

//index dia value set
var element = number[3];//89 ans
console.log(element);

//set element value by index
number[3] = 50;
console.log(number);//Ans:[45,68,78,50,98]

//find index of an element
var positionIndex = number.indexOf(89);
console.log(positionIndex);//Ans: 3