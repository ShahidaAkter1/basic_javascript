
function isPositive(arr){
    var newArray=[];
    for(var i=0;i<arr.length;i++){    
        if(arr[i]>0){
            newArray.push(arr[i]);
        }
        else{
            break; 
        }
    }
    return newArray;
}
var arr=[4542,65,767352,256,-36,65,26];
var res=isPositive(arr);
console.log("New positive array is ::: ",res);