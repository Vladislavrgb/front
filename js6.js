//Задание 6 
let array = [1,1,1,1,1,1,1,1];
let newInt = true; 
for(let i = 0; i < array.length - 1; i++) {
  if (array[i] != array[i+1]){
    newInt = false;
    break;
  }
}
console.log(newInt);