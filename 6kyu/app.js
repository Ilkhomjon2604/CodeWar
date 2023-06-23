// #Kata N1. Stop gninnipS My sdroW!

function spinWords(string){
    word = /\w{5,}/g
    return string.replace (word, (word) => word.split('').reverse().join('') )

    // newStr = string.split(' ');
    // newArr = []
    // for (let i=0; i< newStr.length; i++){
    //   (newStr[i].length >= 5) ? newArr.push(newStr[i].split('').reverse().join('')): newArr.push(newStr[i])
    // }
    // return newArr.join(' ')
  }
  console.log(spinWords("Seriously this is the last one"));