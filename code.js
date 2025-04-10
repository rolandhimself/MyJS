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

//Project 3
console.log("Welcome to Rock,Paper,Scissors ultimate");
const play = prompt("Input choice").toLowerCase;
if (play != "rock" || play != "paper" || play != "scissors"){
    throw new Error("Input rock or paper or scissors");
    
}
const selection = ["rock", "papers", "scissors"];
function getRandomSelection(selection){
    return Math.floor(Math.random() * selection.length);
}
console.log(`User = ${play} Computer = ${getRandomSelection}`);

console.log("The rules are :\n"+ "Rock beats Scissors\n"+ "Scissors beats Paper\n"+ "Paper beats Rock");

if ((play === "rock" && getRandomSelection ==="scissors") || (play === "scissors" && getRandomSelection ==="paper")|| (play === "paper"&& getRandomSelection === "rock")){
    console.log("User wins");
} else if (play === getRandomSelection){
    console.log("It's a tie play again");
} else if ((play === "scissors" && getRandomSelection ==="rock") || (play === "paper" && getRandomSelection ==="scissors")|| (play === "rock"&& getRandomSelection === "paper")){
    console.log("Computer Wins")
}
//Exercise13
function coinToss(){
    const coin = ["Heads", "Tails"];
    return coin[Math.floor(Math.random()* coin.length)];
}
console.log(`${coinToss()}`);

//Exercise14
let names = [];
names = (prompt("Input the names\n")).split(",").map(name => name.trim());;

function randomName(){
    return names[Math.floor(Math.random() * names.length)];
}

console.log(`${randomName()} is paying today`);

//Exercise15

const row1 = ["😙","😙","😙"];
const row2 = ["😙","😙","😙"];
const row3 = ["😙","😙","😙"];

const map = [row1, row2, row3];

console.log(`${row1}\n${row2}\n${row3}`);
const position = prompt("Where do you want to put the treasure? \n");

if (position > 33){
    throw new Error("Input should follow a 3x3 matrix");
}
let column = parseInt(position[0]) - 1;
let row = parseInt(position[1]) - 1;

if (column >= 0 && column < 3 && row >= 0 && row < 3) {
  map[row][column] = "❌";}

console.log("Updated Map:");
map.forEach(row => console.log(row.join(" ")));

//Exercise 16
const student_heights = prompt("Input a list of student heights \n").split(" ").map(Number);

let totalHeight = 0;
let number = 0;

for (let n = 0 ; n < student_heights.length ; n++){
    totalHeight += student_heights[n]; 
    number+= 1;
}
console.log(`Average height in array is ${totalHeight/number}`);

//Exercise 17
const array = prompt("Input the list of numbers \n").split(" ").map(Number);
let maxNumber = 0;
for (let n = 0; n < array.length ; n++){
    if (array[n] > maxNumber){
        maxNumber = array[n];
    }
    else {
        maxNumber = maxNumber;
    }
}
console.log(maxNumber);

//Exercise 18
let sum = 0;
for (let i = 0; i < 101; i++){
    if ((i % 2 )=== 0){
        sum += i;
    }
}
console.log(`The sum of all even numbers between 1 and 100 is ${sum}`);

//Exercise 25
const height = parseInt(prompt("What is the height of the wall? \n"));
const width = parseInt(prompt("What is the width of the wall? \n"));

function calculate(){
    return Math.ceil((height * width)/5);
}
console.log(`You will need ${calculate()} cans of paint to complete the job`);

//Exercise 26
const n = prompt("Check this number: ");

function isPrime(number){
    if (number === 2){
        return true;
    }else if (number % 2 === 0){
        return false;
    } 
    const limit = Math.sqrt(number);
    for (let i = 3; i <= limit; i += 2) { 
        if (number % i === 0) {
            return false
        };
    }
    return true;
}

function primeChecker(number = n){
    if (number <= 1 ){
        console.log("Negative numbers can't be prime");
    } else if (isPrime(number) === true ){
        console.log("This number is prime");
    } else {
        console.log("This number is not prime");
    }
}
primeChecker();

//Exercise 27
const scoresData = {
    Harry: 81,
    Ron: 78,
    Hermione: 99,
    Draco: 74,
    Neville: 62
};

const ratingsData = {};

for (const name in scoresData){
    const score = scoresData[name];
    let rating;

    if (score > 90){
        rating = "Outstanding";
    } else if (80 <score<= 90){
        rating = "Exceeds Expectations";
    } else if (70 <score<= 80){
        rating = "Acceptable";
    } else if ( score < 70){
        rating = "Fail";
    }

    ratingsData[name] = rating;
}

console.log(ratingsData);

//Exercise 28
const travel_log = [
    {
        country: "France",
        visits: 12,
        cities: ["Paris", "Lille", "Dijon"]
    },
    {
        country: "Germany",
        visits: 5,
        cities: ["Berlin", "Hamburg", "Stuttgart"]
    }
];

function addNewCountry (name, numberOfVisits,cities){
    travel_log.push({
        country: name,
        visits: numberOfVisits,
        cities: cities
    })
}

addNewCountry("Russia", 2, ["Moscow", "Saint Petersburg"]);
console.log(travel_log);

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


//Project 2
console.log("Welcome to checkout");
let bill = parseFloat(prompt("What is your bill amount\n"));
const rate = parseFloat(prompt("Choose your preferred percentage 10,12,15\n"));
const num = parseInt(prompt("How many ways will the bill be split\n"));

function finalBill(){
    tip = (rate/100)* bill;
    bill += tip;
    return (bill/num).toFixed(2);
}

console.log(`Each person would pay $ ${finalBill()}`);

//Project 4

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];

function generatePassword(){
const numLetters = parseInt(prompt("Number of letters\n"));
const numSymbols = parseInt(prompt("Number of symbols\n"));
const numNumbers = parseInt(prompt("Number of numbers\n"));

const letterCharacters = Array.from({ length: numLetters }, () => letters[Math.floor(Math.random() * letters.length)]);
const symbolCharacters = Array.from({ length: numSymbols }, () => symbols[Math.floor(Math.random() * symbols.length)]);
const numberCharacters = Array.from({ length: numNumbers }, () => numbers[Math.floor(Math.random() * numbers.length)]);

const allChars = [...letterCharacters, ...symbolCharacters, ...numberCharacters];
  for (let i = allChars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allChars[i], allChars[j]] = [allChars[j], allChars[i]];
  }

  // Convert to string and return
  console.log( allChars.join(''));
  
}

generatePassword();

//Project 5

console.log("Welcome to Treasure Island.");
console.log("Your mission is to find the treasure.");

let gameOver = false
let decision

while (!gameOver){
    try{
    decision = prompt("You're at a crossroad. Where do you want to go? Type \"left\" or \"right\"\n").toLowerCase();

    if (decision === "right"){
        console.log("You've fallen into a hole, GAME OVER");
        gameOver = true;
        break;
    } else if (decision === "left"){
        console.log("You've come to a lake");
    } else {
        throw new Error ("Make sure to input Left or Right");
    }
    }
    catch(error){
        console.log(error.message)
    }


    try{
       decision = prompt("There is an island in the middle of the lake. Type \"wait\" to wait for a boat. Type \"swim\" to swim across.\n").toLowerCase();
       
       if (decision === "wait"){
           console.log("You arrive at the island unharmed");
           
       } else if (decision === "swim"){
           console.log("You were attacked and killed by trout, GAME OVER");
           gameOver = true;
           break;
       } else {
           throw new Error ("Make sure to input wait or swim");
       }
    }
    catch (error){ console.log(error.message) }
    
    
        decision = prompt("There is a house with 3 doors. One red, one yellow and one blue. Which colour do you choose?\n").toLowerCase();
        
        if (decision === "red"){
            console.log("It's a room full of fire. GAME OVER");
            gameOver = true;
            break;
        } else if (decision === "yellow"){
            console.log("You found the treasure! You Win!");
            break;
        }else if (decision === "blue"){
            console.log("You enter a room of beasts. GAME OVER");
            gameOver = true;
            break;
        } else { console.log("You chose a door that doesn't exist. GAME OVER.")
            gameOver = true;
            break;
        }
}