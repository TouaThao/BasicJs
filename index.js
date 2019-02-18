
console.log('Hello World')
////////////////////////////
//Rule for naming variable
//Cannot be a resever keywords
//They should be meaningful
//They cannot start with a number
//They cannot contain a space or hyphen
//They are case sensitive
let name = 'Toua';
console.log(name);
let firstName = 'Toua';
let lastName = 'Thao';
////////////////////////////
//Const
// We use const to store data that we don't want to change
const intrestRate = .07;
console.log(intrestRate);
////////////////////////////
//We have two type. One is primitives/value type.The other is reference type
//Primitive are string, number, boolean,undefine and null
let sky ='blue'; // string
let age = 1000; //number
let isBlue = false; //boolean
let grayGoose; //undefine
let selectedColor = null;// null
////////////////////////////
//Reference type
//They're object,function and array
//This is an object
let carObject = {
    carName:'accord',
    make: 'honda',
    year: 2012,
}
console.log(carObject);
carObject.carName = 'insight';// we are accesing carObject and changing carName to insight
console.log(carObject)
//We could change and access to object by calling them and using the dot notation
//Or we could use the bracket notation
carObject['carName']='Crv';//Another way to access carObject and change carName
console.log(carObject)
////////////////////////////
//array
//to access the index on the array you need to use the bracket
let parkCar =['honda','toyota','subaru','GM'];//This is an array of car Maker
parkCar[4]='Audi';// array start from 0. So we're adding Audi to the parkCar array
console.log(parkCar);
console.log('parkCar array 1',parkCar[1]);
console.log('parkCar length',parkCar.length);//We're checking how many car are in parkCar
////////////////////////////
//function
//Performing a task
//we create a function that call greet. And take in a parameters(person) 
function greet(person){
    console.log('Our First Function'+ ' ' + person)
}
//This is using our function we created and passing in an argument
greet('john')
//calculate task
function square(number){
return number * number
}
console.log('function',square(2))
////////////////////////////
//Arithmetic Operator
let arithmeticX = 10;
let arithmeticY = 5 ;
console.log('Arithmetic Operator', arithmeticX + arithmeticY)
console.log('Arithmetic Operator', arithmeticX - arithmeticY)
console.log('Arithmetic Operator', arithmeticX * arithmeticY)
console.log('Arithmetic Operator', arithmeticX / arithmeticY)
console.log('Arithmetic Operator', arithmeticX % arithmeticY)
console.log('Arithmetic Operator', arithmeticX ** arithmeticY)
//increment and decrement
arithmeticX --
arithmeticY ++
console.log('arithmeticX',arithmeticX)
console.log('arithmeticY',arithmeticY)
////////////////////////////
//assignment operator
let assignmentX = 10
assignmentX = assignmentX + 5;
console.log('assignmentX',assignmentX);
assignmentX = assignmentX * 3;
console.log('new assignmentX',assignmentX);
assignmentX += 6;
console.log('addition',assignmentX);
assignmentX *= 2;
console.log('mutiply',assignmentX);
////////////////////////////
//comparison operator
let comparisonX = 2
//relational
console.log('relational',comparisonX > 4);
console.log('relational',comparisonX < 4);
console.log('relational',comparisonX <= 2);
console.log('relational',comparisonX >= 2);
//Equality
console.log('Equality',comparisonX === 2);
console.log('Equality',comparisonX !== 2);
////////////////////////////
//Equality operator
//strict equality(type + value)
console.log('strict',1 === 1);
console.log('strict','1'===1);
//loose equality(value)
console.log('loose','1' == 1);
console.log('loose',false == 1);
////////////////////////////
//Ternary operator
// if customer have more than 100 points they'are gold customer
// if less than that they're sliver customer
//We create a box that hold points i.e variables and type of customer i.e variables.
// Next we said what every type of customer they are
// we need to check their points
//So if their points is more than 100, they're gold if not they're sliver
let points = 110;// create points
let typeOfCustomer = points > 100 ? 'gold' : 'sliver';//create typeOfCustomer
//Now we put the = sign to check for points. Hence points is on the other side.
//Now that points is on the other side. We could write points is more than 100 it is gold if not it's sliver
//We use the ? sign to said either or.
console.log(typeOfCustomer)
////////////////////////////
//Logic operators
//Logical And (&&)
//Return true if both operands are TRUE
let logicalOperandsA = 5;
let logicalOperandsB = 6;
console.log('Logical And (&&) example ',logicalOperandsA > 0 && logicalOperandsB > 0);
console.log('Logical And (&&) example ',logicalOperandsA < 0 && logicalOperandsB > 0);
//We could use this on real life application. I.e loan.
//We need to check if they have a job and good credit.
//This will have to check for both to be approve.
//If one or the other is false we will return false.
let logicalAndHighIncome = true;
let logicalAndGoodCreditScore = true;
let logicalAndEligibleForLoan = logicalAndHighIncome && logicalAndGoodCreditScore;
console.log('This is for the loan case, using logicalAnd',logicalAndEligibleForLoan);
//Logical Or(||)
//This check if one of the operand is true or not. 
// It don't care if one is false, as long as one is true.
let logicalOrHighIncome = false;
let logicalOrGoodCreditScore = false;
let logicalOrEligibleForLoan = logicalOrHighIncome || logicalOrGoodCreditScore;
console.log('This is for the loan case, using logicalOr',logicalOrEligibleForLoan)
//Not by using !
let applicationRefuse = !logicalOrEligibleForLoan;// applicationRefuse is true because both income and score is false
console.log('application Refuse', applicationRefuse)