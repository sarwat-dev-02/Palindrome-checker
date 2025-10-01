let input = document.querySelector("#input1");
let btn = document.querySelector("button");

function reverseString (string){
return string.split("").reverse().join("");
}

const check = () => {
let value = input.value;
let reverse = reverseString(value)

if(value === reverse){
    alert("It is a Palindrome!");
}else{
    alert("It is not a Palindrome!");
}
input.value = ""
}

btn.addEventListener("click", check);