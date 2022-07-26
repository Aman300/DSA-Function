function A(num){
    if(num == 0){
        return 1;
    }else{
        return num * A(num -1)
    }
}
//console.log(A(5)) //factorial

function sum(number){
     if(number <= 1){
        return number
     }else{
        return number + sum(number-1)
     }
        
   
}

//  console.log(sum(5))



function reverse(str){
    
    if(str.length <= 1){
        return 1;
    }else{
        return reverse(str.slice(1)) + str[0]
    }
}

console.log(reverse("hello"))
