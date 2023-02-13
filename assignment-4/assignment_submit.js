/*
This function name is mindGame and it takes a positive number.
If input number is not equal to number then it show a error massage.
 Arithmatic operations are used to solve this problem.
*/
function mindGame(num){
    if(typeof num != 'number'){
        return "provide valid number";
    }
    let number=((((num*3)+10)/2)-5);
    return number;
}

/*
This function name is evenOdd() and it takes string type input.
If input number is not equal to string then it show a error massage.
if-else condition are used to solve this problem.
*/

function evenOdd(String){
    if(typeof String != 'string'){
        return "provide valid number";
    }
    if(String.length%2==0){
       return "even";
    }
    else{
       return "odd";
    }
}

/*
This function name is isLGSeven() and it takes a number type input.
If input number is not equal to number then it show a error massage.
if-else condition are used to solve this problem.
*/

function isLGSeven(num){
    
    if(typeof num != 'number'){
        return "provide valid number";
    }
    let number=num-7;
    if(number<7){
        return number;
    }
    else{
        return num*2;
    }
}
/*
This function name is findingBadData() and it takes array type input.
If input number is not equal to array then it show a error massage.
for loop are used to solve this problem.
*/

function findingBadData(arr){
    if(Array.isArray(arr)!=true){
        return "provide valid number";
    }
    let count=0;
    for(let i=0;i<=arr.length;i++){
        let element=arr[i];
        if(element<0){
            count++;
        }
    }
    return count;
}

/*
This function name is gemsToDiamond() and it takes three parameter number types input .
If input number is not equal to number then it show a error massage.
Here some arithmatic and if else condition are used to solve this problem.
*/
function gemsToDiamond(firstFriend,secondFriend,thirdFriend){
    if(typeof firstFriend != 'number'  && secondFriend != 'number' && thirdFriend != 'number' ){
        return "provide valid number";
    }
    let first=21;
    let second=32;
    let third=43;
    
    let firstFriendGem=first*firstFriend;
    let secondFriendGem=second*secondFriend;
    let thirdFriendGem=third*thirdFriend;
    let total=firstFriendGem + secondFriendGem + thirdFriendGem;

    let lessNumber=1000*2;

    if(total>lessNumber){
       let total2=total-2000;
        return total2;
    }
    else{
        return total;
    }

  return total;
}