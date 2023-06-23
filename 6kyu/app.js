// #Kata N1. Stop gninnipS My sdroW!

// function spinWords(string){
//     word = /\w{5,}/g
//     return string.replace (word, (word) => word.split('').reverse().join('') )

//     // newStr = string.split(' ');
//     // newArr = []
//     // for (let i=0; i< newStr.length; i++){
//     //   (newStr[i].length >= 5) ? newArr.push(newStr[i].split('').reverse().join('')): newArr.push(newStr[i])
//     // }
//     // return newArr.join(' ')
//   }
//   console.log(spinWords("Seriously this is the last one"));

// #Kata N2. Sum of Digits / Digital Root

function digitalRoot(n) {
  n = n.toString()
  let sum = 0

  do {
    
    for (let i = 0; i<n.length; i++){
      sum+= +n[i]
    }
  }
  while(sum.length >= 1)
  

 

  return sum
}

console.log( digitalRoot(169));

