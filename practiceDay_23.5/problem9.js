/**
 * ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

 */
let arr=[34,65,98,90,24,67,19,67,100,345];

for(let i=0;i<=arr.length-1;i++){
  let element=arr[i];
//   console.log(element);
if(element>80){
    console.log(element)
}
// else{
//     console.log("no");
// }
}