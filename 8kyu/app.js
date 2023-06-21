// #Kata N1. You get an array of numbers, return the sum of all of the positives ones.

// function positiveSum(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) if(arr[i]>= 0) count += arr[i]
//     // return count;
//     console.log(count);
// }   
// positiveSum([1, 2, 33, 4, 5])


// #Kata N2. Reversed Strings

// function solution(str){
//     return str.split('').reverse().join('')
//   }
//   console.log(solution('world'));


// #Kata N3. Beginner - Reduce but Grow

//   function grow(x){
//     let sum = 1;
//     for (let i = 0; i < x.length; i++) sum *= x[i]
//     console.log(sum);
//   }
//   grow([1, 2, 3])

// #Kata N4 .Convert boolean values to strings 'Yes' or 'No'.
// function boolToWord( bool ){
//     return (bool)? console.log('Yes') : console.log('No');
//   }
//   boolToWord(true)

// #Kata N5. Will you make it?
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     // return(distanceToPump / mpg <= fuelLeft)? true : false
//     console.log((distanceToPump / mpg <= fuelLeft)? true : false);
//   };
//   zeroFuel(50, 25, 2)


// #Kata N6. Vowel Count
// function getCount(str) {
//     let count = 0;
//     for (let i = 0; i< str.length; i++)
//         (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ) ? count ++ : count  
//     console.log(count);
//   }
// getCount("abracadabra")


// #Kata N7. Invert values
// function invert(array) {
//     let newArray = [];
//     for (i = 0; i < array.length; i++) 
//       (array[i] >= 0)? newArray.push(array[i] * -1) : newArray.push(Math.abs(array[i]))
//     console.log(newArray);
// }
// invert([1, 2, -3, -4, -5])


// #Kata N8. century From Year

// function Century(year) {
//     let count = 0;
//     for (let i = 0; i < year; i += 100) count++
//     console.log(count);
// }

// Century(2001)


// #Kata N9. Grasshopper - Summation
// var summation = function (num) {
//     let sum = 0;
//     for (let i = 1; i<=num; i++)  sum+= i
//     console.log(sum);
//   }
//   summation(2)


// // #Kata N10. Calculate average
// function findAverage(array) {
//   let count = 0;
//   if(array.length){
//     for(let i = 0; i<array.length; i++){
//       count+= array[i]
//     }
//   }else {
//     return 0
//   }
  
//   console.log(count / array.length) ;
// }
// findAverage([])


// // #Kata N11 .Remove First and Last Character
// function removeChar(str){
//   //You got this!
//    return str.slice(1, -1)
//  };
// console.log(removeChar('eloquent'));   


 // #Kata N12 Opposite number
// function opposite(number) {
//   return number>= 0 ?  -Math.abs(number) :  Math.abs(number)
// }
// console.log(opposite(12525220.3325));

 // #Kata N13 Simple Fun #1: Seats in Theater
//  let seatsInTheater = (nCols, nRows, col, row) =>  (nCols - (col -1)) * (nRows - row )

//   console.log(seatsInTheater(60,100,60,1));


// #Kata N14 Odd or Even?


// function oddOrEven(array) {
//     let sum = 0
//      for (let i = 0; i < array.length; i++ ) sum += array[i]
//      if (sum % 2 == 0) return 'even'
//      else  return 'odd'
//   }

//   console.log(oddOrEven([1, 2]));

// #Kata N15 Is he gonna survive?
// function hero(b, d){
//     return (b / d >= 2) 
//     }
    
//     console.log(hero(7, 4));

// #Kata N15 Is he gonna survive?
// function fakeBin(x){
//     let sum = ''
//     x = x.split('')
//     for( let i = 0; i < x.length; i++) x[i]>= 5 ? sum+= '1': sum+='0'
//     return sum
//   }

// console.log(fakeBin('45385593107843568'));

