//Задание 7

let array = [true,2,1,undefined,1,0,1,null];
let even = 0; 
let odd = 0;
let zero = 0;
let noNum = 0;
array.map (item => {
  if (isNaN(item) || typeof(item) != 'number'){
     noNum ++;
  }
  else {
    if (item % 2 == 0 && item != 0){
    even++;
  }
    else if (item == 0) zero++;
    else odd++;
  }
})
console.log(`Количетсво четных: ${even}, количество нечетных: ${odd}, количество нулей: ${zero}
количество неотносящееся к числам: ${noNum}`);
