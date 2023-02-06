var number = [220,200,45,53];
console.log(number);//number ar full array dhekhabe
number.push(990);//new number add korlam number array te last a
console.log(number);//990 no last a add  soho full number array output dhekhabe
number.unshift(1000);//new number add korlam number array te 1st a
console.log(number);//1000 no 1st a add  soho full number array output dhekhabe

// use push to add the array as the last element of the array 
var friend = ['kalam','salam','suad'];
console.log(friend);
friend.push('tua');
console.log(friend);

// use pop to add the array as the last element of the array 
number.pop();//last element pop
console.log(number);

number.shift();//1st element pop
console.log(number);


//
number.pop();//last element pop
var element=number.pop();
console.log(element);