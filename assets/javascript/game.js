
//computer choices for words
var destinations = ["naples","budapest","bali","waco","singapore","tokyo","chicago", "london","prague","positano","dubai", "maldives"]

//choose word randomly
var computerGuess = destinations[Math.floor(Math.random() * destinations.length)];

//global variables
var rightLetter =[];
var wrongLetter =[];
var underScore =[];

//counter variables
var wins = 0;
var losses = 0;
var maxGuess = 15;
var numGuess =0 ;

//testing
console.log(computerGuess);

//create underscores based on length of word
var generateUnderscore = function(){
    for (var i=0; i<computerGuess.length; i++){
        underScore.push('_'); 
    }return underScore;
}

//user guess
    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


//everytime the user guesses, increase the number of guesses
numGuess++;
maxGuess--;
if (maxGuess == 0) {
    alert ("you're out of guesses!");
}


//if userGuess letter that is correct
    if ((computerGuess.indexOf(userGuess) > -1)){

//add to the right letter array
        rightLetter.push(userGuess);

 //replacing underscore with letter       
        underScore[computerGuess.indexOf(userGuess)] = userGuess;
        console.log(computerGuess.indexOf(userGuess));

  //if all underscores filled, user wins and score on screen will increase   
  
    if(underScore.join('') == computerGuess){
        alert('you win!');
        wins++;
    } 
        
    }
    //all wrong letters get pushed to other array and displayed on the screen
    else {
        wrongLetter.push(userGuess);
        }

//once user gets right answer or reaches max guesses, the game will randomly choose another word


console.log(underScore);
console.log(computerGuess.indexOf(userGuess));
console.log(userGuess);
console.log(rightLetter);
console.log(wrongLetter);


//dom manipulation

document.querySelector('.underscores').textContent = underScore.join(' ');
document.querySelector('#numberofGuesses').textContent = maxGuess;
document.querySelector('.wrongGuess').textContent = wrongLetter.join(' ,');
document.querySelector('.rightGuess').textContent = wins;
document.querySelector('.losses').textContent = losses;

};


//at max guesses, restarts for a new word
//resetGame()






