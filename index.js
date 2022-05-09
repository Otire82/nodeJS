import chalk from "chalk";
const names = ["Damien", "Elina", "Xavier", "Rémi",];
const colors = ["blue", "red", "green", "yellow",];

for (let i = 0; i < names.length; i++) {
    console.log(chalk[colors[i]](names[i]));
}