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



function descendingOrder(n) {
   let num =  n.toString().split('').sort().reverse().join('') * 1 ;
    console.log( num);
}
console.log(descendingOrder(5778784));

