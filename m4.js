const person = {
    name: 'Alice',
    age: 30,
    color: ['red', 'green', 1, 2],
    isAdult: true,
    address: {
        city: 'New York',
        state: 'NY'
    }
};

console.log(person);
console.log(person.name);
console.log(person.address.city);
console.log(person.color[1]);

// destructuring
const { age, name, address, color } = person;
const { city, state } = address;
const [a, b, ,x] = color;
console.log(name, age, a, b, x);
// spread operator
const newPerson = {
    ...person,
    name: 'John',
    color: [...color, 'yellow']
}
console.log(newPerson);
color.push('blue');
console.log(color);
const num = color.filter(x => x > 0);
console.log(num);
const y = num.map(a => a * 2);
console.log(y);