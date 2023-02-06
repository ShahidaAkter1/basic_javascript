/**
  তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 
 */
  let arr=[34,65,98,90,24,67,19,67];
  for(i=0;i<=arr.length-1;i++){
    let element=arr[i];
    console.log(element);
    
  }
  arr[4]=404;
    console.log(arr);
 const partial=arr.splice(3,5,60,100);
    console.log(partial);
    console.log(arr);