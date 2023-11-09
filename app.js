// let count = 0;

// while(count < 10){
//     count++;
//     console.log(count)
// }

// while(!gameOver){
//     // player 1 move
//     // player 2 move
// }

// const secret = 'BabyHippo';

// let guess = prompt("enter the secret code...");

// while(guess !== secret){
//     guess = prompt("You guessed it wrong! enter the secret code...");
// }

// console.log("CONGRATS! You got the secret!")

// let input = prompt("Hey, say something!")
// while (true){
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("Ok you win! :S ")


// for (let i = 0; i < 1000; i++ ){
//     console.log(i);
//     if (i === 100) break;
// }


// math.random 0 to 1 as a decimal
//math.floor we chop off the decimal
// then we add 1

// this will give us from 1 to 10 ~> Math.floor(Math.grandom() * 10) + 1
// if i want from 1 to maximum

// if !maximum is falsy (catches the case where is NaN)
// is going to screen out 0 because 0 is considered falsy

let maximum = parseInt(prompt("Enter the maximum number!"));

// while maximum is not a number
while (!maximum){
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);

    if(guess > targetNum){
        guess = prompt("Too high! Enter a new guess:");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
        attempts++;
    } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit.");
    }
}

if (guess === 'q') {
    console.log("Ok, you quit!");
} else {
    console.log(`You got it! It took you ${attempts} guesses`);
}
