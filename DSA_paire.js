let arr = [2,3,5,3,4,3]

function getValuePare(sum){
    let isParirExist = false

    for(let i = 0; i < arr.length-1; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] == sum){
                isParirExist = true
            }
        }
    }

    return isParirExist;
}

console.log(getValuePare(6))


//  pair 0f 8



// let arr = [1,2,3,4,5]

// function getValuePare(sum){
//     //let isParirExist = false

//     for(let i = 0; i < arr.length-1; i++){
//         for(let j = 0; j < arr.length; j++){
//            console.log(arr[i] + " = " + arr[j])
//         }
//     }
// }

// getValuePare()
