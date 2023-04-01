//Задание 4

let num = getRndInteger(0,100);
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(num);