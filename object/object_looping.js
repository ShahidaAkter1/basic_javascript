var shoppingCart ={
    books:3,
    sunglass:1,
    keyword:5,
    mouse:1,
    pen:25,
    shoes:2
}

const keys = Object.keys(shoppingCart);
console.log(keys);
const values = Object.values(shoppingCart);
console.log(values);

for(var i=0; i<keys.length; i++){
    var propertyName = keys[i];
    var propertiesValue = shoppingCart[propertyName];
  //  console.log(propertyName,propertiesValue);
}



//for or
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName,value);
}