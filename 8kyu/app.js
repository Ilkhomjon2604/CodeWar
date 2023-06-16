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
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // return(distanceToPump / mpg <= fuelLeft)? true : false
    console.log((distanceToPump / mpg <= fuelLeft)? true : false);
  };
  zeroFuel(50, 25, 2)