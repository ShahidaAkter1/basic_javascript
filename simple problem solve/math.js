const result = Math.pow(3,8);
console.log(result);

//Math.abs()
const num1 = 15;
const num2 = 45;
const gap = Math.abs(num1-num2);
if(gap< 5){
    console.log('you guys can be friends');
}
else{
    console.log('you guys stay apart');
}


//Math.round
const number = 2.4589;
const fullName  = Math.round(number);
console.log(fullName);

//Math.ceil

const result2 = Math.ceil(2.000001);
console.log(result2);
//Math.floor
const result3 =Math.floor(456.259);
console.log(result3);

const result4 =Math.floor(13.67);
console.log(result4);

//Math.random()
console.log(Math.random());
//random number need from 1-100
const random = Math.random()*100;
console.log(random);