//count paper
//book1----> 100page
//book2-->200page
//book3--->300page

 function paperRequirments(book1Need,book2Need,book3Need){
    const book1=100;
   let book1Page = book1 * book1Need;
   
   const book2=200;
   let book2Page = book2 * book2Need;

   const book3=300;
   let book3Page = book3 * book3Need;

   let totalPageNeed= book1Page+ book2Page + book3Page;
   return totalPageNeed;
 }

 let result= paperRequirments(10 ,10,1);
 console.log(result);