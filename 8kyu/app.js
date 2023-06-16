// #Kata N1. You get an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) if(arr[i]>= 0) count += arr[i]
    // return count;
    console.log(count);
}   
positiveSum([1, 2, 33, 4, 5])

// #Kata N2. Reversed Strings

function solution(str){
    return str.split('').reverse().join('')
  }
  console.log(solution('world'));