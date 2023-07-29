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


// #Kata N15 Drink about
// function peopleWithAgeDrink(old) {
//     if(old<14)return "drink toddy" 
//     else if(old<18)return "drink coke"
//     else if(old<21)return "drink beer"
//     else return"drink whisky" 
//   };
//   console.log(peopleWithAgeDrink(22));


// #Kata N16 t Find Multiples of a Number
// function findMultiples(integer, limit) {
//     let arr = []
//     for (let i = integer; i<= limit; i++){
//    if ( i % integer ==0 ){
//         arr.push(i)
//         }
//     }
//     return arr
//   }
// console.log(findMultiples(5, 25));  

// #Kata N17 Count the Monkeys!
// function monkeyCount(n) {
//     let res = [];
//       for(let i = 1; i<n+1; i++){
//         res.push(i)
//       }
//       return res
//     }
// console.log(monkeyCount(5));

// #Kata N17 Add Length
// function addLength(str) {
//     array = str.split(' ')
//     const map1 = array.map(x => x += ` ${x.length}`);
//     return map1
//     }

//     console.log(addLength('you will win'));

// #Kata18 Beginner - Lost Without a Map

// function maps(x){
//     return x.map(value => value * 2)
//   }
//   console.log(maps([1, 2, 3]));

// #Kata19 training JS #2: Basic data types--Number

// let v1 = 50,
//     v2 = 100,
//     v3 = 150,
//     v4 = 200,
//     v5 = 2,
//     v6 = 250;

// function equal1(){
//   let a = v1,   
//       b = v1;   
//   return a + b;
// }

// //Please refer to the example above to complete the following functions
// function equal2(){
//   let a = v4  , //set number value to a
//       b =  v2; //set number value to b
//   return a - b;
// }

// function equal3(){
//   let a = v1 , //set number value to a
//       b =  v5; //set number value to b
//   return a * b;
// }

// function equal4(){
//   let a = v4 , //set number value to a
//       b = v5 ; //set number value to b
//   return a / b;
// }

// function equal5(){
//   let a = v2, //set number value to a
//       b =  v6; //set number value to b
//   return a % b;}


// #Kata20 Training JS #5: Basic data types--Object

// function animal(obj){
//     return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
//   }
//   console.log(animal({name:"dog",legs:4,color:"white"}));

// console.log( );

// #Kata21 Training JS #9:: loop statement --while and do..while
// function padIt(str,n){
//     for (let i = 0; i< n; i++){
//       if (i % 2 == 0){
//         str = '*'+ str
//       }else{
//         str +='*'
//       }
//     }
//   return str
// }
// console.log(padIt("a",5));

// #Kata22 Training JS #14:: lnumbers to color code
// function colorOf(r,g,b){
//  let arr = [r, g, b];
//  let newArr = []
//  return '#'+arr.map(val => {
//   val = val.toString(16)
//   if(val.length <2){
//     return '0'+val
//   }else return val
//  }).join('')
  
// }
// console.log(colorOf(1,2,3));


// #Kata23 Training JS #15:: compare arr elements

// function howManySmaller(arr,n){
//   let fixed = arr.map(value => value.toFixed(2))
//   return fixed.filter(val => val < n).length
  
// }
// console.log(howManySmaller([1.234,1.235,1.228],1.24));



// #Kata N24 Training JS #16: Methods of String object--slice(), substring() and substr()
// function cutIt(arr){
//     let newArr = [];
//     arr.map(val => newArr.push(val.length))
//     let min = Math.min(...newArr);
//     return arr.map(value => value.slice(0, min))    
  
//   }

//   console.log(cutIt(["codewars","javascript","java"]));


// #Kata N25 Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
// function firstToLast(str,c){
//   return  (str.indexOf(c) >= 0) ? str.lastIndexOf(c) - str.indexOf(c) : str.indexOf(c)
  

// }
// console.log(firstToLast("ababc","a"));


// #Kata N26 Training JS #18: Methods of String object--concat() split() and its good friend join()

// function splitAndMerge(string, separator) {
//   let words = string.split(' ');
//   let letters = words.map(val => val.split('').join(separator))
//   return letters.join(' ')
// }

// console.log(splitAndMerge("My name is John","."));


// #Kata N27 Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()

// function alienLanguage(str){
//   str = str.split(' ')
//  return  str.map(val => {
//      val = val.toUpperCase().split('')
//      return val.map(value => value.replace(value.at[1], '#'))
//   })

// }
// console.log(alienLanguage("My name is John"));

// 19 - 20 is not done !!! 


// #Kata N28 Training JS #21: Methods of String object--trim() and the string template

// function fiveLine(s){
//   s = s.trim()
//   let str = []
//   for(let i=1 ; i<= 5; i++){
//     if(i == 1){
//         str.push(s.repeat(i))
//     }else{
//       str.push(`n${s.repeat(i)}`)
//     }
//   }
//   return str.join('\\')
// }

// console.log(fiveLine("   a"));


// 22 and 23  is not done 


// #Kata N29 Training JS #24: methods of arrayObject---splice() and slice()
// function threeInOne(arr){
//   let newArr = [];
//   for (let i = 0; i< arr.length; i++)  if(i % 3 == 0) newArr.push(arr[i] + arr[i+1] + arr[i+2])    
//   return newArr
// }

// console.log(threeInOne( [1,2,3,4,5,6] ));



// #Kata N30 Find the capitals
// var capitals = function (word) {
// 	let arr = [];
//     word.split('').filter((val, i) =>{ if(val == val.toUpperCase()) arr.push(i)})
//     return arr
// };
// console.log(capitals('CodEWaRs'));


// #Kata N31 Basic Mathematical Operations

// function basicOp(o, v1, v2)
// {
//     if(o == '+')return +v1 + +v2
//     else if( o == '-') return v1 - v2
//     else if ( o == '*') return v1 * v2
//     else return v1 / v2 
// }

// console.log(basicOp('-', 15, 18));