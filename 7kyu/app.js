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