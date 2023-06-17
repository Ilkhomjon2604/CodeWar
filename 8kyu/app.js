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


// #Kata N7. century From Year

// function Century(year) {
//     let count = 0;
//     for (let i = 0; i < year; i += 100) count++
//     console.log(count);
// }

// Century(2001)


// let cent = 0;
// if (1<= year && year >= 100){
//      cent = cent + 1;
// }else if(101<= year && year >= 200){
//     cent = cent + 2;
// }else if(201<= year && year>= 300){
//     cent = cent + 3;
// }else if(301<= year && year>= 400){
//     cent = cent + 4;
// }else if(400< year && year>= 500){
//     cent = cent + 5;
// }else if(500< year && year>= 600){
//     cent = cent + 6;
// }else if(600< year && year>= 700){
//     cent = cent + 7;
// }else if(700< year && year>= 800){
//     cent = cent + 8;
// }
// else if(800< year && year>= 900){
//     cent = cent + 9;
// }else if(900< year && year>= 1000){
//     cent = cent + 10;
// }else if(1000< year && year>= 1100){
//     cent = cent + 11;
// }else if(1100< year && year>= 1200){
//     cent = cent + 12;
// }else if(1200< year && year>= 1300){
//     cent = cent + 13;
// }else if(1300< year && year>= 1400){
//     cent = cent + 14;
// }else if(1400< year && year>= 1500){
//     cent = cent + 15;
// }else if(1500< year && year>= 1600){
//     cent = cent + 16;
// }else if(1600< year && year>= 1700){
//     cent = cent + 17;
// }else if(1700< year && year>= 1800){
//    return cent = cent + 18;
// }else if(1800< year && year>= 1900){
//     cent = cent + 19;
// }else if(1900< year && year>= 2000){
//     cent = cent + 20;
// }else if(2000< year && year>= 2100){
//     cent = cent + 21;
// }
// else{
//     console.log('you entered not valid year');
// }
// console.log(cent);
