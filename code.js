// Execise 1 - Printing 
//'''
//Instructions;

console.log("Day 1 - Python Print Function"/n+"The function is declared like this:"/n+"print('what to print')");

//Exercise 2
console.log("Day 1 - String Manipulation");
console.log("String Concatenation is done with the \"+\" sign.");
console.log("e.g. DISPLAY(\"Hello \" + \"world"); 
console.log("New lines can be created with a backslash and n."); 

//Exercise 3
const userName = prompt("Key in your name");

if (userName){
    const charCount = userName.length;
    console.log('The number of characters is ' +charCount);
}else{
    console.log("No name entered");
}

//Exercise 4
                //ARRAY METHOD
let a = 3;
let b = 4;

//swaping using destructuring
[a, b] = [b,a];

console.log(a);
console.log(b);

                //ARITHMETIC METHOD
let c = 3;
let d = 4;

c = c + d;
d = c - d;
c = c - d;

//Exercise 5

function sumDigits(number){
    let sum = 0;
    let numString = number.toString();

    for (let digit of numString){
        sum +=parseInt(digit);
    }

    return sum;
}

sumDigits(234);

//Exercise 6

const userHeight = prompt("Input your height");
const userWeight = prompt("Input your weight");

function BMI(userHeight,userWeight){
    return userWeight/(userHeight*userHeight);
}

// Exercise 9
if (BMI < 18.5){
    console.log("Underweight")
 } else if (BMI >= 18.5 && BMI <= 24.9){
    console.log("Normal Weight")
 } else if (BMI >= 25 && BMI <= 29.9){
    console.log("Overweight")
 } else if (BMI >= 30 && BMI <= 34.9){
    console.log("Obese")
 } else {
    console.log("Clinically Obese")
 }

// Exercise 10

function isLeapYear(year){
    if ((year % 4 ===0) && ((year % 100 === 0) && (year % 400 === 0))){
        console.log("Year is a leap year")
    }
}


//Exercise 11
console.log("Welcome to Papa's Pizza");
const size = prompt("What size pizza do you want? S, M, or L");
const pepperoni = prompt("Do you want pepperoni? Y or N");
const cheese = prompt("Do you want extra cheese? Y of N");
let bill = 0;

if (size === "S"){
    bill += 15;
}else if (size === "M"){
    bill += 20;
}else if (size === "L"){
    bill += 25;
}
if ((bill === 20 || bill === 25) && pepperoni === "Y"){
    bill += 3;
} else if (bill === 15 && pepperoni === "Y"){
    bill += 2;
}
if (cheese === "Y"){
    bill += 1;
}

console.log("Your final bill is $"+ bill);

//Exercise 12
const maleName = prompt("What is your name?").toLowerCase;
const femaleName = prompt("What is your name?").toLowerCase;

function countLetters(str, word){
    return [...word.toLowerCase()].reduce((total, char) => 
        total + (str.split(char).length - 1), 0);
};

const maleScore = countLetters(maleName, "true") + countLetters(maleName, "LOVE");
const femaleScore = countLetters(femaleName, "TRUE") + countLetters(femaleName, "love");

const finalScore = maleScore + femaleScore;
console.log(finalScore + "%");
<<<<<<< HEAD:code

console.log("Welcome new user");
const city = prompt("What's the name of the city you grew up in?\n").trim();
const petName = prompt("What's your pet's name?\n").trim();

if (!city || !petName){
    alert("Please provide required information");
}
function nameGen(){
    return `${city} ${petName}`;
}
console.log(`Your band name is ${nameGen()}`);
=======
>>>>>>> fd7bc15110fbcbcb6a594e92cf38eaf963bed871:code.js
