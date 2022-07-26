let array = [1,2,3,4,5,6,7,8,9,10]
//------------------------------------------
//Array inserction 

// for(let index = 0;  index < array.length; index++){
//     array[index] = array[index]
// }
// console.log(array)

//--------------------------------------------------------------
// Array Insert At the beginning in array 

// let item = 600;
// for(let index =array.length-1; index >= 0; index--){
//     if(index >= 0){
//         array[index+1] = array[index]
//         if(index == 0){
//             array[index] = item
//         }
//     }
// }

// console.log(array)
//-----------------------------------------------------------

//--------------------------------------------------------------
// Array insert ele any position in array 

// let pos = 0
// let newEle = 500
// for(let index = array.length-1; index >= 0; index--){
//         if(index >= pos){
//             array[index+1] = array[index]
//             if(index == pos){
//                 array[index] = newEle
//             }
//         }
// }
// console.log(array)
//-----------------------------------------------------------

//insert array element in last postion

// let newEle = 200;
// let len = array.length+1
// for(let index = 0 ; index < len; index++){
//     if(index == array.length){
//         array[index] = newEle
//     }
// }

// console.log(array)

//-----------------------------------------------------------

//delete array element at the beginning position 

// for(let index = 0; index < array.length; index++){
//     if(index >= 0){
//         array[index] = array[index+1]
//     }
// }
// array.length = array.length-1
// console.log(array)


//-----------------------------------------------------------


//-----------------------------------------------------------

//delete array element any position 
// let pos = 3;

// for(let index = pos; index < array.length; index++){
//     array[index] = array[index+1]
// }
// array.length = array.length-1

// console.log(array)


//-----------------------------------------------------------

//delete array element in last position 

// for(let index = 0; index < array.length; index++){
//     if(index == array.length-1){
//         array[index] = array[index+1]
//     }
// }

// array.length = array.length-1


// console.log(array)

//-----------------------------------------------------------------

//--array element searching 

// function Seach(arr,ele){
//     for(let index = 0; index < arr.length; index++){
//         if(arr[index] == ele){
//          return index
//         }
        
//      }
//      return -1;
// }


// console.log(Seach([1,2,3,4,5,67,8,9,0],6))

//------------------------------------------------------
//-- binary search ----------------------

// let start = 0;
// let end = array.length-1;
// let searchEle = 8;

// while(start <= end){
//     let middle = Math.floor((start + end)/2)
//     let middleValue = array[middle]

//     if(middleValue == searchEle){
//         return console.log(middle)
//     }else if(middleValue < searchEle){
//         start = start + 1;
//     }else{
//         end = end - 1
//     }
// }

/////--------------------------------------------------

//----------Selection Short ---------------------------

// let arr = [55,3,7,1545,9,2,4,7,1,99,5]

// let temp = 0;

// for(let i = 0; i < arr.length; i++){
//     for(j = i+1; j < arr.length; j++){
//         if(arr[i] > arr[j]){
//             temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }

// console.log(arr)


//----------bobble Short ---------------------------

// let arr = [55,3,6,15,9,2,4,7,1,99,5]

// let temp = 0;

// for(let i = 0; i < arr.length-1; i++){
//     for(let j = 0; j < arr.length-i-1; j++){
//         if(arr[j] > arr[j+1]){
//             temp = arr[j+1]
//             arr[j+1] = arr[j]
//             arr[j] = temp
//         }
//     }
// }

// console.log(arr)

class A{
    
    aman(){
        console.log("Aman kumar")
    }
}


class B extends A{
    fun(){
        console.log("sharma")
    }
}

let C = new B()
C.fun()


