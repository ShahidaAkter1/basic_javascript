/**
 Problem 5: Convert your gems into diamond

তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 

১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43

[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।

Sample Input & Output:-

Input: 1, 1, 1
Output: 96

Input: 20, 200, 50
Output: 6970

Input: 100, 5, 1
Output: 303

 */

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

 let result=gemsToDiamond(20,200,50);
 console.log(result);