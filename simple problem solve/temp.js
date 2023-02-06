let first = 5;
let second = 7;
console.log(first,second);

//swap 1st way
// const temp=first;
// first=second;
// second=temp;
// console.log(first,second);

//2nd way...destructuring
[first,second] = [second,first];
console.log(first,second);
