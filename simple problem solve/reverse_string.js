function reverseString(text){
    let reverse = '';
     for(let i= text.length-1 ; i>=0; i--){
         const element = text[i];
         reverse = reverse+ element;
         console.log(element,reverse);
     }
     return reverse;
 }
 const mystring = 'I am a good girl';
 const reversed = reverseString(mystring);
 console.log('reversed output:', reversed)