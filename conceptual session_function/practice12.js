/**
 * Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result.
 */


function isLeepYear(years){
    var leapYear= [];
    for(var i=0;i<=years.length;i++){
        var year=years[i];
        if(year%4==0){
            leapYear.push();
        }
        
    }
    return leapYear;
}
var myyear = [2023,2024,2025,2026];
var output=isLeepYear(myyear);
console.log(output);
///output ase na 