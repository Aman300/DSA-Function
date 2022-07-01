function vovelCheck(arr,value){
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
console.log(vovelCheck(["a",'f','c','d'],"d"))