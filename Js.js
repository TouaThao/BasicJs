let myAge = 2
myAge >= 18 ? console.log('Drink Beer')
:console.log('Drink Juice')

// condition (statemenet/comparison) ? (result) : (else statement if previous is false)
let drink = myAge >= 18 ? 'beer': 'Jucie'
console.log(drink)

//swtich statement
let myJob = '' 
switch(myJob){
    case 'Teacher':
    console.log(myJob + ' ' + 'Teach children');
    break;
    case 'Driver':
    console.log(myJob + ' ' + 'Drive for uber');
    break;
    case 'Cook':
    console.log(myJob + ' ' + 'Cook for a living');
    break;
    default:
    console.log('He do something')
}
//function
// call function. Name the function. Take in an arugument/aruguments.
//inside the function do something

function personAge(birthYear){
    return 2019 - birthYear
}
let touaAge = personAge(1991)
console.log('what my age?',touaAge)

function yearsToRetirement(personAge,name){
let age = personAge
let retirement = 65- age 
console.log('Your age is'+ ' ' + age + ' ' + 'you will retire in' + ' '+ retirement + ' ' + 'Your name is' + ' ' + name)
}

yearsToRetirement(28,'toua')

// functional declaration and function expression

function jobTitle(jobName,yourName){
   switch(jobName){
       case 'Teacher':
       return yourName + ' ' + 'teaches children'
       case 'Driver':
       return yourName + ' ' + 'drive for a living'
       case 'cook':
       return yourName + ' ' + 'cook for a living'
       default:
       return yourName + ' ' + 'Do something'
   }
}

console.log(jobTitle('Driver', 'Toua'))

/* 
Object
*/