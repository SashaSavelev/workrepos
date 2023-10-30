function countMoney(obj) {
    let sum = 0
    for (let prop in obj) {
      sum += obj[prop]
    }
    return sum
  }

    
  function multiplyNumeric(obj) {
    
    for (let prop in obj) {
      typeof obj[prop] == "number"? obj[prop] = obj[prop]*2: 0 
    }  
   }