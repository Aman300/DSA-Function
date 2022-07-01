
//  Higher order function in javaScript

// forEach() || map() || reduce() || filter()


// const numbers = [1, 2, 3, 4, 5];

// function addOne(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i] + 1);
//   }
// }

// addOne(numbers);



// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number) => console.log(number + 1));




// const numbers = [1, 2, 3, 4, 5];

// function isOdd(array, oddArr = []) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//       oddArr.push(array[i]);
//     }
//   }
//   return oddArr;
// }

// const oddArray = isOdd(numbers);
// console.log(oddArray);



// const numbers = [1, 2, 3, 4, 5];

// const oddArray = numbers.filter((number) => number % 2 !== 0);
// console.log(oddArray);


// const numbers = [1, 2, 3, 4, 5];

// const oddArray = numbers.filter((number) => number < 5 || number > 3);
// console.log(oddArray);


//--------------- map ---------------

// const numbers = [1, 2, 3, 4, 5];

// function addOneMore(array, newArr = []) {
//   for (let i = 0; i < array.length; i++) {
//     newArr.push(array[i] + 1);
//   }
//   return newArr;
// }

// const newArray = addOneMore(numbers);
// console.log(newArray);

// const numbers = [1, 2, 3, 4, 5];

// const newArray = numbers.map((number) => number + 1);
// console.log(numbers);

// ------------------reduce---------------

// const numbers = [1, 2, 3, 4, 5];

// function getTotalValue(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     total += array[i];
//   }
//   return total;
// }

// const totalValue = getTotalValue(numbers);
// console.log(totalValue);



// const numbers = [1, 2, 3, 4, 5];

// const totalValue = numbers.reduce((sum, number) => sum + number);
// console.log(totalValue);

/////////////////////////////////////////////////////
//Q1  let arr1 = [1,2,3,4,5,6,7,8,9,10]
//    let arr2 = 5;

// let arr1 = [1,2,3,4,5,6,7,8,9,10]
// let arr2 = 5;

// for(let i = 0; i<arr1.length; i++){
//     if(arr1[i] == arr2){
//         console.log("true")
//     }else{
//         console.log("false")
//     }
// }

// arr1.forEach(function(i){
//     if(i == arr2){
//                 console.log("true")
//             }else{
//                 console.log("false")
//             }
// });

///////////////////////////////////////////

// --------  Q2


// let numbers = [3, 6, 8, 10, 12]

// let i = []
//  numbers.forEach(function(number){

//   i = number+20

// } )
// console.log(i)


// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]

// //console.log(arr.filter((num) => num == 2 || num % 2 !== 0 ))
// let ele = arr.filter((num) => num % 2 == 0 )
// let res = ele.filter((x) => x % 3 == 0)
// let final = Math.max(...res)
// console.log(final)





// let isPrime = 0 ;
 
// for(let i = 2; i <= 50; i++){
//    isPrime = 1;
//    for(let j = 2; j <= i/2; j++){
//       if(i%j == 0){
//          isPrime = 0;
//          break;
//       }
//    }
//    if(isPrime == 1){
//       console.log(i)
//    }
// }





// let duplicate = [1,1,2,4,5,6,6,7,7,7]

// console.log([...new Set(duplicate)])




// let array = [
//    {product:"apple",price:50},
//    {product:"apple",price:20},
//    {product:"apple",price:90},
//    {product:"apple",price:10},
//    {product:"apple",price:30},
//    {product:"apple",price:55},
//    {product:"apple",price:60},
// ]

// let data = array.map((sum) => sum.price).reduce((a,b) => a+b)
// console.log(data)


// let str = 'aammaann'

// console.log([...new Set(str)])

// let obj =[{
//    name:"aman",
//    lname:"kumar",
//    age:21,
//    address:"chhatauna nawkothi",
// }]
// obj.map((str,index,ele)=> console.log(str,index,ele))






// let string1 = [1,1,2,3,4]
// let string2 = [1,2,1,3,4]

// // check if length is equal
// // reperesent the frequency of every character in both strings
// // check if character and frequency matches in  both strings


// function anagram(string1, string2){
  
//   if(string1.length !== string2.length) return false

//   let objectFreq1 = {}
//   let objectFreq2 = {}
  
//   for (let char of string1) {
//     objectFreq1[char] = (objectFreq1[char] || 0) + 1
//   }
//   for (let char of string2) {
//     objectFreq2[char] = (objectFreq2[char] || 0) + 1
//   }
  
//   for (let key in objectFreq1){
    
//     if(!objectFreq2[key] || objectFreq2[key] !== objectFreq2[key]) return false
    
//   }
//   console.log({objectFreq1, objectFreq2})
  
//   return true 
  
// }

// console.log(anagram(string1, string2))



// Create a Map
// const fruits = new Map([["apples", 500]]);

// Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);

// console.log(fruits)


// let array = [1,1,2,2,3,4,5,6,7,7,6,5,4]

// let res = [...new Set(array)]

// console.log(res)

let args = [1,2,3,4,5,6,7,8,8,8,8,8]

for(let i = 0; i<args.length; i++){
   let obj = {}
   obj[args[i]] = args[i]
   console.log(obj)
}