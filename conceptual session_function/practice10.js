/**
 * Write a function that will take hour as the input parameter and will
convert it into minutes and will return the result in minutes.
 */
function time(hour){
    var minutes  = hour*60;
    return minutes;
}

var totalMinutes=time(3);
console.log(totalMinutes);
