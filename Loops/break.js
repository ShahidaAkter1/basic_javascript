//break for loop
for(var i=0; i<=20; i++){
    console.log(i);
    if(i>=10){
        break;
    }
}

//gap ar jonno
console.log("I Love You");


//break for while loop
var roastGiven=0;
while(roastGiven < 10){
    console.log("roast den");
    roastGiven++;
    if(roastGiven > 4){
        break;
    }
}

//gap ar jonno
console.log("I Love You");


//number
var numbers = [45,87,89,56,32,51,25];
for(var i=0; i<7 ; i++){
    var number = numbers[i];
    if(number > 100){
        break;
    }
    console.log(number);
}