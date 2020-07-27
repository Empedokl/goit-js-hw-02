let input;
const numbers = [];
let total = 0;
do {
    input = prompt("Введите число");  
const checkNumber = Number.isNaN(+input);
  if (checkNumber) {
    alert("Было введено не число, попробуйте еще раз");   
   } else {
      numbers.push(+input);  
   }
  }   
while (input !== null){
  for (let i = 0; i<numbers.length; i+=1 ){
          total += numbers[i];
}
alert(`Общая сумма чисел равна ${total}`);
}





