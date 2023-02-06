/*
একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা।
         অব্জজেক্টটি/Input দেখতে এমনঃ

[
    {name:'sakib', age:30},
    {name:'samiul', age:20},
    {name:'sahid', age:50},
    {name:'samin', age:10}

]
*/

let friends=[
    {name:'sakib', age:30},
    {name:'samiul', age:20},
    {name:'sahid', age:50},
    {name:'samin', age:10}
];

function smallestPerson(friends){
    let smallest=friends[0];
    for(let i=0;i<friends.length; i++){
        const friend=friends[i];
        if(friend.age<smallest.age){
            smallest=friend;
        }
    }
    return smallest;
}

const result=smallestPerson(friends);
console.log(result);