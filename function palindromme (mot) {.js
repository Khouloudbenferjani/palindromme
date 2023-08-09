function palindromme (mot) {

  for (var i= 0; i < mot.length / 2; i++){
      // check if it is not palindromme
      if (mot[i] !== mot[mot.length-1-i]){
          return false;
      }
 }
  return true;
}


console.log(palindromme("radar"))


var mot=""
var motinverse=""
var i
for (let i = mot.length - 1; i >= 0; i--) {
  motinverse=motinverse+mot[i];
  console.log(i)
  console.log(motinverse)
}
if(motinverse==mot){
    console.log(mot+" est un palindrome")
}
else{
        console.log(mot+" n'est un palindrome")
}

