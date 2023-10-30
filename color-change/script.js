import { randomNumber } from "./randomNumber"
import { colorBuilder } from "./changeColor"





let speed = 1000;

let l1, l2, l3, l4, l5, l6, l7, l8, l9, l10;

let arrayOfInterval = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10];

let array = [];
for (let i = 1; i <= 10; i++) {
  let element = document.querySelector(`.l${i}`);
  array.push(element);
}


function startIntervaling() {
  array.forEach((item, index) => {
    arrayOfInterval[index] = setInterval(() => colorBuilder(item), speed);
  });
}

function clerIntervaling(){
  arrayOfInterval.forEach((interval) => clearInterval(interval));
}

startIntervaling()

let input = document.querySelector("input");

input.oninput = () => {
  clerIntervaling()
  speed = input.value;
  speed == "" ? (speed = 1000) : 0;
  startIntervaling()
};

