'use strict';

let userName = prompt('What is your name?');

alert('Welcome ' + userName + ', lets play a guessing game.');

let questionOne = 'Are you a student?';
let responseOne = prompt(questionOne).toLowerCase();

if (responseOne === 'yes' || responseOne === 'y') {
  // console.log('The user is correct', response);
  alert('You are correct');
} else {
  // console.log('The user is incorrect', response);
  alert("Sorry, that's incorrect");
}

let questionTwo = 'Am I an alien?';
let responseTwo = prompt(questionTwo).toLowerCase();

if (responseTwo === 'no' || responseTwo === 'n') {
  // console.log('The user is correct', response);
  alert('You are correct');
} else {
  // console.log('The user is incorrect', response);
  alert("Sorry, that's incorrect");
}

let questionThree = 'Do I live on the planet Earth?';
let responseThree = prompt(questionThree).toLowerCase();

if (responseThree === 'yes' || responseThree === 'y') {
  // console.log('The user is correct', response);
  alert('You are correct');
} else {
  // console.log('The user is incorrect', response);
  alert("Sorry, that's incorrect");
}

let questionFour = 'Am I good dancer?';
let responseFour = prompt(questionFour).toLowerCase();

if (responseFour === 'no' || responseFour === 'n') {
  // console.log('The user is correct', response);
  alert('You are correct');
} else {
  // console.log('The user is incorrect', response);
  alert("Sorry, that's incorrect");
}

let questionFive = 'Am I a developer?';
let responseFive = prompt(questionFive).toLowerCase();

if (responseFive === 'yes' || responseFive === 'y') {
  // console.log('The user is correct', response);
  alert('You are correct');
} else {
  // console.log('The user is incorrect', response);
  alert("Sorry, that's incorrect");
}
