const users = [
    {
        name: 'John',
        age: 25
    },
    {
        name: 'Jane',
        age: 21
    },
    {
        name: 'Josh',
        age: 17
    },
    {
        name: 'Jack',
        age: 28
    },
    {
        name: 'Jade',
        age: 15
    },
];

const adultUsers = users.filter(user => user.age >= 18);
const userNames = users.map(user => user.name);

console.log(adultUsers);
console.log(userNames);