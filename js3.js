//Задание 3

let string = "hello, my PC"
let newString = '';

for (i = string.length-1; i >= 0;i--){
  newString += string[i];
}
console.log(newString);