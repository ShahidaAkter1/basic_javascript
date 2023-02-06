var shoppingCart ={
    books:3,
    sunglass:1,
    keyword:5,
    mouse:1,
    pen:25,
}

//1.when you know the specific property name , use dot notation to get the property value
var penCount = shoppingCart.pen;

//alternative system
///2.when you know the specific property name , use dot notation to get the property value
var penCount2 = shoppingCart['pen'];

//3.
var propertyName= 'mouse';
var propertyValue = shoppingCart[propertyName]
console.log(propertyName,propertyValue);


  ///
var properties = Object.keys(shoppingCart);
console.log(properties);
var propertiesValue = Object.values(shoppingCart);
console.log(propertiesValue);

console.log(shoppingCart);

//set property values
//1.way
 shoppingCart.mouse = 15;
 console.log(shoppingCart);

 //2.way
 shoppingCart['mouse'] =40;
 console.log(shoppingCart);

 //3.way
 shoppingCart[propertyName]= 89;
 console.log(shoppingCart);
