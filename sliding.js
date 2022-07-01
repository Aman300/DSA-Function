let arr = [5,3,-1,-3,1,3,6,7]

let len = arr.length;
let w = 3;
let newArr = []

for(let currentWindow = 0; currentWindow < len-w+1; currentWindow++){
    let max = arr[currentWindow]
    for(let i = currentWindow; i < currentWindow+w; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    newArr.push(max)
}

console.log(newArr)