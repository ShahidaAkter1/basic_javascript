const names= ['abul','babul','cabul','dabul','ebul','abul','kabul','mamun','babul','babul','dabul'];
// console.log(names);

function remoteDuplicate(names){
    const unique = [];
    for(let i=0; i< names.length ; i++){
        const name=names[i];
        // console.log(name);
        if(unique.includes(name)==false){
            unique.push(name);
        }
    }
    return unique;
}
const uniqueNames = remoteDuplicate(names);

console.log(uniqueNames);