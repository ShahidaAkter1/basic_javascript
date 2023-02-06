/**
 * 5.	এখন  একটা  রি-ইউজেবল  ফাঙ্কশন  লিখো   যাকে  তুমি  শুধু  (চেস্ট ,বাইসেপ ,ট্রাইসেপ ) এইগুলা  দিয়ে  ডাক  দিলে  সে  তোমাকে  ডিটেলস  ওয়ার্কআউট দিয়ে  দিবে ।
 */

function workout(workOutName){
 var bicepWorkOut = ["cable",'bicep','Bicep'];
 var cestWorkout=['cest fly','cest press'];
 if(workOutName== "chest"){
    return cestWorkout;
 }
 else if(workOutName=="bicep"){
    return bicepWorkOut;
 }
 else{
    return "don't Know";
 }
}

var workOutPlan = workout("chest");
console.log(workOutPlan);
var workOutPlan = workout("bicep");
console.log(workOutPlan);
