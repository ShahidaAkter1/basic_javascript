// //['sajid','mamun','kamal','jubayer bin rased','Chinku']

var arr = ['sajid','mamun','kamal','jubayer bin rased','Chinku'];
  
  var lgth = 0;
  var longest;
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > lgth) {
      var lgth = arr[i].length;
      longest = arr[i];
    }
  }
  
  console.log(longest);

//2nd way

  function bestFriend(array) {
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  
  var word = bestFriend(['sajid','mamun','kamal','jubayer bin rased','Chinku']);
  console.log(word); 