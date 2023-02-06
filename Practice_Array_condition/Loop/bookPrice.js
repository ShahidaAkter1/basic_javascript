//9. Write the price of the books that you have.Display the prices if the prices is lower than 200.

var bookPrice = [100,50,150,130,250,300,545];

for(var i=0; i<bookPrice.length; i++){

    var bookPriceList = bookPrice[i];
    if(bookPriceList>200){
       continue;
   
    }
    
    console.log(bookPriceList);
}