//using array find even number
var numbers= [1,2,3,4,5,6,7,8,9,10];

var temp=[];

for(var i=0; i< numbers.length; i++){
    var element = numbers[i];

    if(element % 2 == 0){
        temp.push(element);
    }
}
console.log(temp);

//using array find odd number
var numbers= [1,2,3,4,5,6,7,8,9,10];

var temp=[];

for(var i=0; i< numbers.length; i++){
    var element = numbers[i];

    if(element % 2 != 0){
        temp.push(element);
    }
}
console.log(temp);