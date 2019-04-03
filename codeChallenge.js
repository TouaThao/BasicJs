/*
so you're task with find the BMI of two person.

The forumla for BMI is weight(pounds) X 0.45

height(inches) X  0.025 = newHeightAnswer ^2

take the answer from the pounds and divide it by newHeightAnswer

After that compare the two person BMI

Then print a string of who got higher BMI
*/

let markWeight = 190;//pound
let markHeight = 70;//inches
let johnWeight = 165;//pound
let johnHeight = 63; //inches

let markNewWeight = 190 * 0.45;
let markNewHeightAnswer = 70 * 0.025;
let markFinalHeightAnswer = markNewHeightAnswer * markNewHeightAnswer;
let markBMI = markNewWeight / markFinalHeightAnswer;
console.log('mark', markBMI);

let johnNewWeight = 165 * 0.45;
let johnNewHeightAnswer = 63 * 0.025;
let johnFinalHeightAnswer = johnNewHeightAnswer * johnNewHeightAnswer;
let johnBMI = johnNewWeight / johnFinalHeightAnswer;
console.log('john',johnBMI);

let bodyComparesion = markBMI >= johnBMI;
console.log('Is Mark BMI greater than John BMI?',bodyComparesion)