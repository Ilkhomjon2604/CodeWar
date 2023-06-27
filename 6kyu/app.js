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

// NOT DONE 

// #Kata N2. Sum of Digits / Digital Root

// function digitalRoot(n) {
//   n = n.toString()
//   let sum = 0
//   let num = 0

//   for (let i=0; i<n.length; i++) sum+= +n[i]
//    if(sum > 9 ){
//     sum = sum.toString().split('');
//     for (let j = 0; j<sum.length; j++){
//       num+= +sum[j]
//     }
//    }
//   return num
// }

// console.log( digitalRoot(9999999));



// #Kata N3. Who likes it?
// function likes(names = 'no one') {
// //  if(!names.length){
// //   return `no one likes this`
// //  }else if(names.length === 1){
// //   return `${names[0]} likes this`
// //  }else if(names.length === 2){
// //   return `${names[0]} and ${names[1]} like this`
// //  }else if(names.length === 3){
// //   return `${names[0]}, ${names[1]} and ${names[2]} like this`
// //  }else {
// //   return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
// //  }
// let x = names.length;
// switch (x) {
//   case 0:
//     return `no one likes this`
//     break;
//   case 1:
//     return `${names[0]} likes this`
//     break;
//     case 2:
//       return `${names[0]} and ${names[1]} like this`
//       break;
//     case 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`
//       break;
//   default:
//     return `${names[0]}, ${names[1]} and ${x - 2} others like this`
// }
// }

// console.log(likes([ ]));



// #Kata N3. Array.diff

function arrayDiff(a, b) {
  let newArr = [];

  if (b.length) {
   
      
  }
  else return a
}
console.log(arrayDiff([1, 2, 3], [1]));