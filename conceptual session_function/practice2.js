/**
 * 2.	এমন  একটা  ফাঙ্কশন  লিখতে  হবে  যাকে ডাক  দিলেই  সে sorry লেখা টাকে ১০ বার  কনসোল লগ  করবে 
 */
//without parameter
function writeSorry(){
    for(var i=0; i<10; i++){
        console.log("Sorry")
    }
}
writeSorry();

//with parameter
function writeTnx(name){
    for(var i=0; i<10; i++){
        console.log("Thank You ", name);
    }
}
writeTnx("Shahida");