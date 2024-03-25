#! /usr/bin/env node

import inqurer from "inquirer";

const randomNumber = Math.floor(Math.random()*6+1);
const answer =await inqurer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess answer",
  },
]);
console.log(randomNumber)

// console.log(answer);
if(answer.userGuessedNumber===randomNumber){
    console.log("Congratulation ! you guess right number")
}
else{
    console.log("You guess wrong number")
}