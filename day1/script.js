
const button = document.getElementById('Check')
const result = document.getElementById('result')

let number =Math.ceil((Math.random()*100+1));
console.log(number)

button.addEventListener("click",function()
{   const input = Number(document.getElementById('input').value);
    console.log(input);
    
    if(!input){
        result.innerHTML="provide valid number";
    }
    else if(number>input){
        result.innerHTML="your guess number is less then actual number";
    }
    else if(input>number){
        result.innerHTML="your guess number is greater then actual number";
    }
    else{
         result.innerHTML="you guess it right";
    }

});