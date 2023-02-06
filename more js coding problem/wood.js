/**
 * fixed:per item wood requerements
 1. chair-->3cft
 2.table --> 10cft
 3.bed--> 50cft

 vary: quantity
 */

 function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chaireWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity  * perBedWood;
    // console.log(chairQuantity,tableQuantity,bedQuantity);
    const totalWood = chaireWood + tableWood + bedWood;
    return totalWood;
 }
 const totalWood = woodCalculator(2,2,5);
 console.log(totalWood);