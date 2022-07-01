// let str = 'hello'
//  let newStr = ""
//  for(let i = str.length -1; i >= 0 ;i--){
//    newStr = newStr + str[i]
//  }

//  console.log(newStr)    // olleh

let arr = ["h","e","l","l","o"]

let newArr = []
let res = newArr.push

for(let i = arr.length -1; i >=0; i--){
   newArr = newArr + arr[i]
}

console.log(newArr)

