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




// #Kata N2. Who likes it?
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



// #Kata N3. Convert string to camel case

// function toCamelCase(str){
//   let letter = str.split(/-|_/gm);
//   let sum= []
//   for(let i=0; i<letter.length; i++){
//     cap = letter[i].split('')
//     if(i) cap[0] = cap[0].toUpperCase()
//     cap = cap.join('');
//     // str.replace(letter[i], cap) stupid chiziqchala kerak emas ekaaaan
//     sum.push(cap)
//   }
//   console.log(str);
//   // console.log(sum.join('_'));
//     return sum.join('')
// }
// console.log(toCamelCase("the_stealth-warrior"));

// #Kata N4 Bit Counting

// var countBits = function(n) {
//     let binary = n.toString(2)
//     res = 0
//    for (let i=0;i<binary; i++) binary[i] >0 ? res++ : res
//    return res
//   };

// console.log(countBits(9));

// #Kata N5 Sum of Digits / Digital Root

// function digitalRoot(n) {
//         let sum = 0;
//         let sum1 = 0;
//         let sum2 = 0;
//         n = n.toString()
//         for(i = 0; i<n.length; i++) sum += +n[i]



//     if ( sum > 0 ){
//         console.log('hey');
//         n = sum;
//         n = n.toString()
//         for(i = 0; i<n.length; i++) sum1 += +n[i]
//         if (sum1 > 9){
//             n = sum1;
//         n = n.toString()
//         for(i = 0; i<n.length; i++) sum2 += +n[i]
//         return sum2
//         }else return sum1

//     }else return sum

//   }
//   console.log(digitalRoot(1698979));

// #Kata N5 Find The Parity Outlier

// function findOutlier(int){
//     let odd = [];
//     let even = [];
//     for (let i = 0; i<int.length; i++ ) {
//         if (int[i] % 2== 0)  even.push(int[i])   
//         else odd.push(int[i])
//     }

//     return odd.length > even.length ? Number(even) : Number(odd)
//   }

// console.log(findOutlier([1, 2, 3]));

// #Kata N5  Find the odd int
// function doTest(a) {
//   let obj = {};
//   a.forEach(val => obj[val] = (obj[val] || 0) + 1);
//   for (const keys in obj)  if(obj[keys] % 2 !== 0) return keys
// }

// console.log(doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));


// #Kata N6 Counting Duplicates

// function duplicateCount(text){
//   let obj = {};
//   let sum = 0
//   text.toLowerCase().split('').forEach(val => obj[val] = (obj[val] || 0) + 1);
//   for (const key in obj) if(obj[key]>1) sum++
//   return sum
// }

// console.log(duplicateCount("aabBcde"));

// #Kata N7 Multiples of 3 or 5

// function solution(number){
//     let sum = 0;
//     for(let i = 0; i < number; i++)  if(i % 3 == 0 || i % 5 == 0)  sum+=i
//     return sum
//   }


//   console.log(solution(10));

// let chars = ['A', 'B', 'A', 'C', 'B'];

// let uniqueChars = [];
// chars.forEach((element) => {
//     if (!uniqueChars.includes(element)) {
//         uniqueChars.push(element);
//     }
// });

// console.log(uniqueChars);

// function arrayDiff(a, b) {
