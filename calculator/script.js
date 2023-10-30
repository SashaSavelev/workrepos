 
let firstNumber = '';
let secondNumber = '';
let symbol = '';
let calculation;

let calculationBox = document.getElementsByClassName('calculation')[0]

let cSymbol = document.getElementById('delete')
 

cSymbol.onclick = function(){
  calculationBox.innerHTML = ''
}

 let plus = document.getElementById('plus')

 plus.onclick = function() {
   symbol = "+"
 }

 let minus = document.getElementById('minus')

 minus.onclick = function() {
   symbol = "-"
 }


 let divide = document.getElementById('divide')

 divide.onclick = function() {
   symbol = "/"
 }


 let multiply = document.getElementById('multiply')

 multiply.onclick = function() {
   symbol = "*"
 }



 let one = document.getElementById('one')

 one.onclick = function() {
   firstNumberfunc('1')
 }




 let two = document.getElementById('two')

 two.onclick = function() {
   firstNumberfunc('2')
 }

 let three = document.getElementById('three')

 three.onclick = function() {
   firstNumberfunc('3')
 }

 let four = document.getElementById('four')

 four.onclick = function() {
   firstNumberfunc('4')
 }

 let five = document.getElementById('five')

 five.onclick = function() {
   firstNumberfunc('5')
 }

 let six = document.getElementById('six')

 six.onclick = function() {
   firstNumberfunc('6')
 }
 let seven = document.getElementById('seven')

 seven.onclick = function() {
   firstNumberfunc('7')
 }
 let eight = document.getElementById('eight')

 eight.onclick = function() {
   firstNumberfunc('8')
 }
 let nine = document.getElementById('nine')

 nine.onclick = function() {
   firstNumberfunc('9')
 }

 let zero = document.getElementById('zero')

 zero.onclick = function() {
   firstNumberfunc('0')
 }


function firstNumberfunc(number) {

     symbol == ""? firstNumber +=number: secondNumber +=number;
   symbol== ""?  calculationBox.innerHTML = firstNumber:  calculationBox.innerHTML = secondNumber
}

function deleting() {
    firstNumber = ''
    secondNumber = ''
    symbol = ''
    calculation = ''
}  

let equal = document.getElementById('equal')

equal.onclick = function() {
  
    firstNumber == ''? firstNumber = '0' : 0;
    secondNumber == ''? secondNumber= '0': 0;
switch (symbol) {
    case '+':
         calculation = +firstNumber  + +secondNumber;
        break;
    case '-': 
    calculation = +firstNumber - +secondNumber;
    break;
    case '*': 
    calculation = +firstNumber * +secondNumber;
    break;
    case '/': 
    calculation = +firstNumber / +secondNumber;
    break;
    default:
        calculation = +firstNumber
        break;
}
  
  calculationBox.innerHTML = calculation
  deleting()
}

let box = document.getElementById('calculator')

box.onclick = function() {
    let vanilka = document.getElementsByClassName('vanilka')[0]
    vanilka.classList.add('present')
    setTimeout(() => {
        vanilka.classList.remove('present')
    }, 500);
}

