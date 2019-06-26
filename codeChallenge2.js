//Take the average score of the players and divide it by 3
//After that take. Find out who got the better score with a else if statement.
//Mike score is = 116, 94 and 123
//Jonh score is = 89,120,103
//use if else and switch case, itinary operator

//////Extra
//Mary also play the game too.
//Mary score is = 97, 134, 105

let mikeScore = (116 + 94 + 123) / 3
let johnScore = (229 + 120 + 103) / 3
let maryScore = (97 +  134 + 105) / 3
console.log(mikeScore,'Mike')
console.log(johnScore,'John')
console.log(maryScore,'Mary')


if (mikeScore > johnScore) {
    console.log('Mike have the higher score')
} else if (mikeScore === johnScore){
console.log('They Tie')
}else{
    console.log('John have the higher score')
}

// switch( maryScore, mikeScore , johnScore){
//         case maryScore > johnScore && mikeScore:
//         console.log('Mary got the higher score')
//         break;
//         case mikeScore > johnScore && maryScore:
//         console.log('Mike score is higher')
//         break;
//         case johnScore > mikeScore && maryScore:
//         console.log('John score is higher')
//         break;
//         default:
//         console.log('They all tie',maryScore,johnScore,mikeScore)
// }

maryScore < johnScore ? console.log('John Score is higher'):console.log('Mary score is higher than john')