/**
 * John is a web developer, and he cycles to work.He knows the distance between his house and his office in miles.John wants to measure the distance in killometers.Calculate the distance in Km.
 * To convert miles to Km:
 * km = miles * 1.6094
 */

function milesToKillometer(miles){
    const Killometer= miles * 1.60934;
    return Killometer;
}

const km=2;
const milesKm = milesToKillometer(km);
console.log(milesKm );
