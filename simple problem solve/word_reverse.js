
function reversewords(str){
    const words = str.split(' ');
    const result = [];
    // console.log(words);

    // [ 'I', 'am', 'a', 'good', 'girl' ]
    for(let i=words.length-1; i>=0;i--){
        const element = words[i];
        result.push(element);
    }
     console.log(result);
    // const reversed = result.join(' ');
    // return reversed;
}

const mystring= 'I am a good girl';
reversewords(mystring);