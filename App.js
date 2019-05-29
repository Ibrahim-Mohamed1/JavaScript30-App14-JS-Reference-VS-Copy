// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Abe';
let name2 = name;
console.log(name, name2);
name = 'Liza';
console.log(name, name2);

let wrong = false;
let right = wrong;
console.log(wrong, right);
wrong = true;
console.log(wrong, right)

const players = ['Abe', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
console.log(players, team);
team[3] = 'Lux';
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
team4[3] = 'heeee hawww';
console.log(team4);
const team5 = Array.from(players);

const person = {
    name: 'Abe',
    age: 80
};
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);
const abe = {
    name: 'Abe',
    age: 100,
    social: {
        twitter: '@N/A',
        facebook: 'N/A'
    }
};
console.log(abe);
const dev = Object.assign({}, abe);
const dev2 = JSON.parse(JSON.stringify(abe));