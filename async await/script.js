async function fetchPeople (url) {
    const response = await fetch(url)
    const people = await response.json()
    return people
}

let people = fetchPeople('https://reqres.in/api/users?per_page=12')



people.then(people => {
    console.log("Вывести всех людей")
    console.log( people.data)

    console.log("Вывести в консоль фамилии всех пользователей в цикле");
    for (let item of people.data) {
        console.log(item.last_name)
    }


});




people.then(people => {
   
});

people.then(people =>{
    
})


people.then(people =>{

console.log(`Вывести следующее предложение: Наша база содержит данные следующих пользователей:  и далее в этой же строке через запятую имена и фамилии всех пользователей. Использовать метод reduce`);
  
   let arrayOfPeople = people.data
   let result = arrayOfPeople.reduce((acc, currentValue) => `${acc}${currentValue.first_name} ${currentValue.last_name}, `, '')
  console.log(`Наша база содержит данные следующих пользователей: ${result}`)
})

people.then(people =>{
    console.log("Вывести названия всех ключей в объекте пользователя");

    for (let item in people.data[0] ) {
        console.log(item);
    }
})


