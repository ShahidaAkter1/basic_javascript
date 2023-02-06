/**..Question:
 * You are given an array:
 *    var fruits= ["Apple","Banana","Orange"];
 * 
 * a) find the index of 'Banana' and replace 'Banana' with 'Mango'
 * 
 * b)Remove 'Orange' and add "Watermelon"
 */

//ans a)index
var fruits= ["Apple","Banana","Orange"];
var positionBanana= fruits.indexOf('Banana');
console.log(positionBanana);

//ans a)replace
fruits[1]="Mango";
console.log(fruits);

// ans b)remove
fruits.pop();
console.log(fruits);
// ans b) add
fruits.push('Watermelon');
console.log(fruits);
