
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
carObject.carName = 'insight'
console.log(carObject)
//We could change and access to object by calling them and using the dot notation
//Or we could use the bracket notation
carObject['carName']='Crv'
console.log(carObject)
////////////////////////////
//array
//to access the index on the array you need to use the bracket
let parkCar =['honda','toyota','subaru','GM']
parkCar[4]='Audi'
console.log(parkCar)
console.log(parkCar[1])
console.log(parkCar.length)
////////////////////////////
//function
//Performing a task
function greet(person){
    console.log('Our First Function'+ ' ' + person)
}
greet('john')
//calculate task
function square(number){
return number * number
}
console.log(square(2))
////////////////////////////
//Arithmetic Operator
let arithmeticX = 10;
let arithmeticY = 5 ;
console.log(arithmeticX + arithmeticY)
console.log(arithmeticX - arithmeticY)
console.log(arithmeticX * arithmeticY)
console.log(arithmeticX / arithmeticY)
console.log(arithmeticX % arithmeticY)
console.log(arithmeticX ** arithmeticY)
//increment and decrement
arithmeticX --
arithmeticY ++
console.log(arithmeticX)
console.log(arithmeticY)
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
console.log(comparisonX > 4);
console.log(comparisonX < 4);
console.log(comparisonX <= 2);
console.log(comparisonX >= 2);
//Equaility 
console.log(comparisonX === 2);
console.log(comparisonX !== 2);