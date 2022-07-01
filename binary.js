function binarySearch(sortedArr,value){
    let start = 0                         // leftPointer starts from initials that's why it's 0
    let end = sortedArr.length-1

    while(start <= end){
        const middle = Math.floor((start + end)/2);
        const midValue = sortedArr[middle]

        if(midValue === value){
            return middle

        }else if(midValue < value){
            start = middle + 1
        }else{
            end = middle - 1
        }
    }
    return -1
}
console.log(binarySearch([10, 20, 30, 50, 60, 80, 110, 130, 140, 170],20) )