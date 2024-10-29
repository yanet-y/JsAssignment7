// Exercise 1
const colors = ['red','green','blue']
const [firstColor,secondColor,thirdColor] = colors;
console.log(firstColor)

//Exercise 2
const person = { name: 'Alice', age: 25, city: 'Wonderland' }
const {name,age,city} = person;
console.log(city);

//Exercise 3
const settings = { theme: 'dark', language: 'en' };
const { theme, language, mode = 'light' } = settings;
console.log(mode);