
let string1 = [5,4,3,2,1]
let string2 = [1,2,3,4,5]

// check if length is equal
// reperesent the frequency of every character in both strings
// check if character and frequency matches in  both strings


function anagram(string1, string2){
  
  if(string1.length !== string2.length) return false

  let objectFreq1 = {}
  let objectFreq2 = {}
  
  for (let char of string1) {
    objectFreq1[char] = (objectFreq1[char] || 0) + 1
  }
  for (let char of string2) {
    objectFreq2[char] = (objectFreq2[char] || 0) + 1
  }
  
  for (let key in objectFreq1){
    
    if(!objectFreq2[key] || objectFreq2[key] !== objectFreq2[key]) return false
    
  }
  console.log({objectFreq1, objectFreq2})
  
  return true 
  
}

console.log(anagram(string1, string2))