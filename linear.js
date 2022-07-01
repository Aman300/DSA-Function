let arr = [1,2,3,4,5,6,7]
arr.pop()
arr.push(10)
arr.shift()
arr.unshift(20)
arr.splice(2,0,30)
console.log(arr)



function arraySort(arr,value){
    let temp = 0;
   for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(arr[i] < arr[j]){
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
   }
   return arr
}


function reverseArray(arr){
    let newArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
        const element = arr[i];
        newArray.push(element)
    }
    return newArray
}


function linearSearch(arr,value){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return i
        }
    }
}


function binarySearch(arr,value){
    let start = 0 ;
    let end = arr.length -1;
    while(start <= end){
        const middle = Math.floor((start + end)/2)
        const middleValue = arr[middle]
        if(middleValue == value){
            return middle
        }else if (middleValue < value){
            start = middle + 1;
        }else{
            end = middle -1
        }
    }
    return -1
}



//console.log(arraySort([10,2,33,4,5,7,8,95],33))
//console.log(reverseArray([9,8,7,6,5,4,3,2,1]))
//console.log(linearSearch([10,2,33,4,5,7,8,95],95))
//console.log(linearSearch(['a','r','t','f'],"f"))
//console.log(binarySearch([1,2,3,4,5,6,7,8,9],9))