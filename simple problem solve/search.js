const lyrics = 'Tumi bondu kala pakhi ami jeno ki. bosonto kale tumay bolte pari ni';

const doesExist = lyrics.includes('pakhi');
console.log(doesExist);

//lyrices k lowercase() kore includes()kora hoyese
const doesExist1 = lyrics.toLowerCase(lyrics).includes('pakhi');
console.log(doesExist1);

//
const searchString='pakhi';
const doesExist3 = lyrics.includes(searchString);
console.log(doesExist3);


///indexof()
console.log(lyrics.indexOf('tumi'));//output -1..cz tumi nai
console.log(lyrics.indexOf('Tumi'));//output 0..cz Tumi ase

if (lyrics.indexOf('sada') !== -1){
    console.log ('exists inside the string')
}
else{ 
    console.log('cannot find it');
}

//startwith
console.log(lyrics.startsWith('2mi'));

//endswith

const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
fileName.endsWith('.pdf')
console.log(fileName.endsWith('.pdf'));