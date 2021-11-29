var optionsArray=[0,0,0,0,0];
var valOne = -1;
var valTwo = -1;
var answernum = -1;
var answerIndex=-1;
var ptcounter=0;

var correctsound = new Audio('./sound/correct.mp3');
correctsound.volume = 0.005;

var gamemusic = new Audio('./sound/gamemusic.mp3');
gamemusic.volume = 0.007;
gamemusic.loop=true;

//Update the counter because user answered correctly.
function updateCounter() {
    var counter = document.querySelector('.pointcounter');
    ptcounter = ptcounter + 1;
    counter.textContent = ptcounter;
}

function checkanswer(optionnum) {
    if(answerIndex == optionnum) { //selected correct answer
        updateScreen();
        correctsound.play();
    } else {
        alert("Try again!");
    }
}

//Returns a random int number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function createquestion() {
    valOne = Math.floor(Math.random() * 10)+1; //between 1 to 10 (inclusive)
    valTwo = Math.floor(Math.random() * 10)+1; //between 1 to 10 (inclusive)

    answerIndex=getRandomArbitrary(0,5); //chose random optionsArray index for answer

    var questionText = document.querySelector('.questionwrapper');
    questionText.textContent = valOne + " × " + valTwo;
    
    answernum=valOne*valTwo;
}

function fillarray() {
    var i = 0;
    var arr = [];
    while(arr.length < 5){
        var num = Math.floor(Math.random() * 100)+1; //1 to 100 range
        if(i!==answerIndex){ 
            if(num === answernum) {
                arr.push(num+i);
            } else {
                arr.push(num);
            }
        } else { 
            arr.push(answernum);
        }
        i++;
    }
    optionsArray = arr; //make the filled arr equal to global optionsArray
}

function onloadfunc() {
    gamemusic.play();
    const option1 = document.querySelector('.option1');
    const option2 = document.querySelector('.option2');
    const option3 = document.querySelector('.option3');
    const option4 = document.querySelector('.option4');
    const option5 = document.querySelector('.option5');
    createquestion();
    fillarray();
    option1.textContent = optionsArray[0];
    option2.textContent = optionsArray[1];
    option3.textContent = optionsArray[2];
    option4.textContent = optionsArray[3];
    option5.textContent = optionsArray[4];
}

function updateScreen() {
    updateCounter();
    onloadfunc();
}