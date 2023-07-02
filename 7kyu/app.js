// #Kata N1. Digit*Digit.
// let num = 765;
// let StrNum = num.toString().split('');
// let newStr = ''
// for( i = 0 ; i < StrNum.length; i++){
//     newStr += StrNum[i] * StrNum[i]
// }
// console.log(newStr * 1);

// / #Kata N2. Credit Card mask.

// let str = 'Assalomu aleykum';
// let text = ''

// if (str.length > 4){
//     for (let i = 0; i< str.length - 4; i++) text +=  '#'
// }

// console.log(text + str.slice(-4));

// #Kata N3. Highest and Lowest

// function highAndLow(numbers){
//     newArr = numbers.split(' ')
//     console.log(Math.max(...newArr));   
//     console.log(Math.min(...newArr)); 
//   }
//   highAndLow('8 3 -5 42')

// #Kata N4. Disemvowel Trolls
//need to remove all vowels from string
// function disemvowel(str) {
//     // newStr = ''
//     // for (let i = 0; i< str.length; i++){
//     //     if (str[i] === 'o' || str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e'  || str[i] === 'O' || str[i] === 'A' || str[i] === 'I' || str[i] === 'U' || str[i] === 'E')  continue
//     //     else
//     //         newStr += str[i]    
//     // }
//     // console.log(newStr);

//     return str.replace(/[aeiou]/gi, '');

// }

// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));

// #Kata N5. Descending Order

// function descendingOrder(n) {
//    let num =  n.toString().split('').sort().reverse().join('') * 1 ;
//     console.log( num);
// }
// console.log(descendingOrder(5568));


// #Kata N6. Remove String Spaces
// function noSpace(x){
//     return x.split(' ').join('')
// }

// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

// #Kata N7. Sum of two lowest positive integers
// function sumTwoSmallestNumbers(numbers) {  

//     function compareNumbers(a, b) {
//         return a - b;
//       }
//     let sum = numbers.sort(compareNumbers);
//     console.log(sum);
//     return sum[0] + sum[1]
  
//   }
//   console.log(  sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

// #Kata N8.Square(n) Sum
// function squareSum(numbers){
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++)    sum += numbers[i] ** 2
      
//     console.log(sum);
// }
// console.log(squareSum([0, 3, 4, 5]));

// #Kata N9 .String repeat
// function repeatStr (n, s) {
//     return s.repeat(n);
//   }
//   console.log(repeatStr(5, "#"));

// #Kata N10 .find Shortest 

// function findShort(s){

//     const shortest = s.split(' ').reduce(function(a, b) {
//       return a.length < b.length ? a : b;
//     });
//       return shortest.length
//     }

//     console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

// #Kata N11 Exes and Ohs

// function XO(str) {
//     let x = 0;
//   let o = 0;
//   for( let i = 0; i< str.length; i++){
    
//     if (str[i] === 'o' || str[i] === 'O'){
//       o++
//     }else if (str[i] === 'x'|| str[i] === 'X'){
//     x++
//     }
    
//   }
//   return o == x
// }
// console.log(XO('xo'));

// #Kata N12 Regex validate PIN code

// let validatePIN  = (pin) => {
//    if (pin.length == 4 || pin.length == 6)  for(let i = 0; i < pin.length; i++ ) return   (pin[i] !== /[a-z]/ig) ? true : false }
//   console.log(validatePIN("0010"));


// NOT DONE YET 


// #Kata N13 Two to One (Longest)
// function longest(s1, s2) {
//     let arr = []
//     let sum = s1+s2;
//     for (let i=0; i<sum.length; i++) if(!arr.includes(sum[i]))  arr.push(sum[i])
//     return arr.sort().join('')
//   }

//   console.log(longest("aretheyhere", "yestheyarehere"));


// #Kata N14 Reverse words
// function reverseWords(str) {
//     let word = str.split(' ')
//     for(let i = 0; i< word.length; i++) word[i] = word[i].split('').reverse().join('')
//     word = word.join(' ')
//     return word
//   }
//   console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));


// #Kata N15 Get the Middle Character
// function getMiddle(s){
//     res = []
//     if 
//         (s.length % 2 == 0)  res.push(s[s.length / 2], s[s.length / 2 - 1] )      
//     else
//         res.push(s[Math.floor(s.length / 2)])
// return res.join('')
//     }

//     console.log(getMiddle("test"));
//     console.log(getMiddle("testing"));

// #Kata N16 Jaden Casing Strings

// function toJadenCase (str) {

//     let word = str.split(' ');
//     for (let i = 0; i < word.length; i++){
//       word[i] = word[i].split('');
//       word[i][0] = word[i][0].toUpperCase();
//       word[i] = word[i].join('');
//     }
  
//     return word.join(' ')
//   };

//   console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));

// #Kata N16 List Filtering

// function filter_list(l) {
//     newarr = []
//     for (i= 0; i<l.length; i++)  if( typeof l[i] =='number')  newarr.push(l[i])
//     return newarr
//   }

//   console.log(filter_list([1,2,'aasf','1','123',123]));