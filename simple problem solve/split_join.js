const lyrics = 'Tumi bondu kala pakhi ami jeno ki. bosonto kale tumay bolte pari ni';
console.log(lyrics);//full sentence print hobe

//split space korle array type ans dey
const parts=lyrics.split(' ');
console.log(parts);/*/akane space bad dia dibe + array type ans dibe....output:[
    'Tumi',  'bondu',
    'kala',  'pakhi',
    'ami',   'jeno',
    'ki.',   'bosonto',
    'kale',  'tumay',
    'bolte', 'pari',
    'ni'
  ]
  */
//sentance devide kore
  const sentence = lyrics.split('.');
  console.log(sentence);/*output:[
    'Tumi bondu kala pakhi ami jeno ki',
    ' bosonto kale tumay bolte pari ni'
  ]
  */

  //split letter type ans dibe

  const chars=lyrics.split('');
  console.log(chars);
  /**
   * output:
   * //split letter type ans dibe
[
  'T', 'u', 'm', 'i', ' ', 'b', 'o', 'n', 'd',
  'u', ' ', 'k', 'a', 'l', 'a', ' ', 'p', 'a',
  'k', 'h', 'i', ' ', 'a', 'm', 'i', ' ', 'j',
  'e', 'n', 'o', ' ', 'k', 'i', '.', ' ', 'b',
  'o', 's', 'o', 'n', 't', 'o', ' ', 'k', 'a',
  'l', 'e', ' ', 't', 'u', 'm', 'a', 'y', ' ',
  'b', 'o', 'l', 't', 'e', ' ', 'p', 'a', 'r',
  'i', ' ', 'n', 'i'
]
 
   */



//slice 
const partial = lyrics.slice(5,8);
console.log(partial);//output: bon

const partial2 = lyrics.substring(5,8);
console.log(partial2);//output: bon


//trim()
const part = ' hello world ';
console.log(part);
console.log(part.trim());

//join()
const lines = [
    'Tumi bondu kala pakhi ami jeno ki',
    ' bosonto kale tumay bolte pari ni'
  ];
  const newlines= lines.join('. ');
  console.log(newlines);