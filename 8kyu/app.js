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

function invert(array) {
    let newArray = [];
    for (i = 0; i < array.length; i++) 

      (array[i] >= 0)? newArray.push(array[i] * -1) : newArray.push(Math.abs(array[i]))
  
    
    console.log(newArray);

}
invert([1, 2, -3, -4, -5])