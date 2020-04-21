
//computer choices for words
var destinations = ["naples","budapest","bali","waco","singapore","tokyo","chicago", "london","prague","positano","dubai", "maldives"]

//choose word randomly
var computerGuess = destinations[Math.floor(Math.random() * destinations.length)];
var rightLetter =[];
var wrongLetter =[];
var underScore =[];

//testing
console.log(computerGuess);

//create underscores based on length of word
var generateUnderscore = function(){
    for (var i=0; i<computerGuess.length; i++){
        underScore.push('_'); 
    }return underScore;
}

console.log(generateUnderscore());

//user guess
    document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//if userGuess letter that is correct
    if ((computerGuess.indexOf(userGuess) > -1)){

//add to the right letter array
        rightLetter.push(userGuess);

 //replacing underscore with letter       
        underScore[computerGuess.indexOf(userGuess)] = userGuess;

  //if all underscores filled, user wins and score on screen will increase   

    if(underScore.join('') == computerGuess){
        alert('you win!');
    } 
        
    }
    //all wrong letters get pushed to other array and displayed on the screen
    else {
        wrongLetter.push(userGuess);
        }
//once user gets right answer or reaches max guesses, the game will randomly choose another word


console.log(computerGuess.indexOf(userGuess));
console.log(rightLetter);
console.log(wrongLetter);

};


//at max guesses, restarts for a new word
//resetGame()






