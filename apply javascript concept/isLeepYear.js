//1 way
// function isLeepYear(year){
//     const remainder = year% 4;
//     if(remainder ==0){
//         console.log('Your year is leep year');
//     }
//    else{
//         console.log('Your year is not leep year');
//     }
// }
// isLeepYear(23545);
// isLeepYear(2024);



//2 way
function isLeepYear(year){
    const remainder = year% 4;
    if(remainder ==0){
      return true;
    }
   else{
      return false;
    }
}
const isMyYearLeepYear= isLeepYear(23545);
console.log('my year is leep year:', isMyYearLeepYear) ;
const isHerYearLeepYear= isLeepYear(2024);
console.log('my year is leep year:', isHerYearLeepYear) ;

