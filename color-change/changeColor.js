export function colorBuilder(elem) {
    let color = `rgb(${randomNumber(255)} ${randomNumber(255)} ${randomNumber(
      255
    )})`;
    elem.style.color = color;
  }