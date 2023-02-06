/*
*Let's say you have x amount of money.
If you have more than 80000, then you will buy a Mac
If you have more than 60000, then you will buy gaming Laptop
If you have more than 40000, then you will buy Lenovo Yoga 
If you have more than 20000, then you will buy an used laptop...otherwise you will use you mobilephone.
*/



///hoi nai...
var myMoney=prompt("Entyer your Number:" +myMoney);

if(myMoney>80000){
    console.log("I will buy a Mac");
}
else if(myMoney>60000){
    console.log("I will buy a gaming Laptop");
}
else if(myMoney>40000){
    console.log("I will buy a Lenovo Yoga ");
}
else if(myMoney>20000){
    console.log("I will buy an used laptop");
}
else{
    console.log("I will buy a mobilephone");
}
