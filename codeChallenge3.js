/*
So three bill 48, 124 and 268.
if the bill is less than $50 tip will be at 20%
if the bill is higher than $100 but less than $200 tip will be at 15%
if higher than 200 dollar tip will be at 10%
must have two array at the end.
One for the bill
one for the final amount(bill + tips)
*/
function tipCalculator(bill){
let percentageOfBill;

if (bill < 50) {
    percentageOfBill = .20;
} else if(bill >= 50 && bill < 200){
    percentageOfBill = .15;
} else if( bill < 200){
    percentageOfBill = .10;
}
   return percentageOfBill * bill
 
}

console.log(tipCalculator(10))


