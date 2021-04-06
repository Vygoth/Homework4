var score = document.querySelector("#score")
var time = document.querySelector("#Time")
var question = document.querySelector("#question")
var ans1 = document.querySelector("#ans1")
var ans2 = document.querySelector("#ans2")
var ans3 = document.querySelector("#ans3")
var ans4 = document.querySelector("#ans4")
var answerClass = document.querySelector(".answers")
var begin = document.querySelector("#Begin")
var reset = document.querySelector("#Reset")
var result = document.querySelector("#result")
var timeLeft;
var timer;
var userData = [];

var playerScore = 0;
var highScore = 0;

var sec = 60;
function timeStart() {
    function startTimer(){
        console.log('timer suppose to go')
            timer = setInterval(function(){
            sec--;
            time.innerHTML= sec.toString();
            if (sec <= 0) {
                console.log("End")
                End();
                clearInterval(timer);
            }
        }, 1000);
    }
    startTimer();
};

function incorrect(){
    if(result.textContent == "Incorrect!"){
        sec -= 5;
        time.innerHTML= sec.toString();
    }
}
var answers = [ans1, ans2, ans3, ans4]
function scoreUpdate(){
    score.textContent = playerScore.toString();
}

for(i = 0; i < answers.length; i++){
    answers[i].style.display = "none";
}
begin.addEventListener("click", setOne);

function End(){
    console.log("TrueEnd")
    clearInterval(timer);
    if(playerScore > highScore){
        var initials = prompt("High Score! Enter your initials.")
        highScore = playerScore;
        userData.push("Initials: " + initials,"High Score: " + highScore, "Remaining Time: " + sec);
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log(userData);
    }
    question.textContent = "Quiz Over!"
    for(i = 0; i < answers.length; i++) {
        answers[i].dataset.state = "hidden";
        answers[i].style.display = "none";
    }
    result.textContent = "Please refresh to play again!";
}

function setOne(event){
    timeStart();
    var questOne = ["js", "script", "javascript", "scripting"];
    var correctOne = "script";
    event.stopPropagation();
    question.textContent = "Inside which HTML element do we put the JavaScript?";
    if(answerClass.dataset.state === "hidden"){
        for(i = 0; i < answers.length; i++){
            answers[i].dataset.state = "show";
            answers[i].style.display = "block";
        }
    } if(begin.dataset.state === "show"){
        begin.dataset.state = "hidden";
        begin.style.display = "none";
    }
    for(i = 0; i < answers.length; i++){
        answers[i].textContent = questOne[i];
    }
    for(i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", function(event) {
            var selected = event.target;
            if(selected.innerHTML === correctOne){
                playerScore += 1;
                console.log(playerScore);
                result.textContent = "Correct!";
                scoreUpdate();
            } else {
                //this is also where time reduction will go.
                result.textContent = "Incorrect!";
                return;
            }
            incorrect();
            setTwo();
        });
    }
    
}

function setTwo(){
    var questTwo = ["The body section", "Both the head section and the body section are correct", "The head section", "After the footer"];
    var correctTwo = "The body section";
    question.textContent = "Where is the correct place to insert a JavaScript?";
    for(i = 0; i < answers.length; i++){
        answers[i].textContent = questTwo[i];
    }
    for(i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", function(event) {
            event.stopPropagation();
            var selected = event.target;
            if(selected.innerHTML === correctTwo){
                playerScore += 1;
                console.log(playerScore);
                result.textContent = "Correct!";
                scoreUpdate();
            } else {
                //this is also where time reduction will go.
                result.textContent = "Incorrect!";
                return;
            }
            incorrect();
            setThree();
        });
    }
    
}
function setThree(){
    var questThree = ["script src = xxx.js", "script href = xxx.js", "script name = xxx.js", "link source = xxx.js"];
    var correctThree = "script src = xxx.js";
    question.textContent = "What is the correct syntax for referring to an external script called xxx.js?";
    for(i = 0; i < answers.length; i++){
        answers[i].textContent = questThree[i];
    }
    for(i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", function(event) {
            event.stopPropagation();
            var selected = event.target;
            if(selected.innerHTML === correctThree){
                playerScore += 1;
                console.log(playerScore);
                result.textContent = "Correct!";
                scoreUpdate();
            } else {
                //this is also where time reduction will go.
                result.textContent = "Incorrect!";
                return;
            }
            incorrect();
            setFour();
        });
    }
    
}
function setFour(){
    var questFour = ["alert(Hello World)", "msgBox(Hello World)", "alertBox(Hello World)", "msg(Hello World)"];
    var correctFour = "alert(Hello World)";
    question.textContent = "How do you write Hello World in an alert box?";
    for(i = 0; i < answers.length; i++){
        answers[i].textContent = questFour[i];
    }
    for(i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", function(event) {
            event.stopPropagation();
            var selected = event.target;
            if(selected.innerHTML === correctFour){
                playerScore += 1;
                console.log(playerScore);
                result.textContent = "Correct!";
                scoreUpdate();
            } else {
                //this is also where time reduction will go.
                result.textContent = "Incorrect!";
                return;
            }
            incorrect();
            setFive();
        });
    }
    
}
function setFive(){
    var questFive = ["function myFunction()", "function:myFunction()", "function = myFunction", "function(myFunction())"];
    var correctFive = "function myFunction()";
    question.textContent = "How do you create a function in JavaScript?";
    for(i = 0; i < answers.length; i++){
        answers[i].textContent = questFive[i];
    }
    for(i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", function(event) {
            event.stopPropagation();
            var selected = event.target;
            if(selected.innerHTML === correctFive){
                playerScore += 1;
                console.log(playerScore);
                result.textContent = "Correct!";
                scoreUpdate();
            } else {
                //this is also where time reduction will go.
                result.textContent = "Incorrect!";
                return;
            }
            incorrect();
            setSix();
        });
    }
    
}
function setSix(){
    var questSix = ["myFunction()", "call myFunction()", "call function myFunction()", "activate myFunction()"];
    var correctSix = "myFunction()";
    question.textContent = "How do you call a function named myFunction?";
    for(i = 0; i < answers.length; i++){
        answers[i].textContent = questSix[i];
    }
    for(i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", function(event) {
            event.stopPropagation();
            var selected = event.target;
            if(selected.innerHTML === correctSix){
                playerScore += 1;
                console.log(playerScore);
                result.textContent = "Correct!";
                scoreUpdate();
            } else {
                //this is also where time reduction will go.
                result.textContent = "Incorrect!";
                return;
            }
            incorrect();
            setSeven();
        });
    }
    
}
function setSeven(){
    var questSeven = ["if (i == 5)", "if i = 5", "if i == 5 then", "if i = 5 then"];
    var correctSeven = "if (i == 5)";
    question.textContent = "How to write an IF statement in JavaScript?";
    for(i = 0; i < answers.length; i++){
        answers[i].textContent = questSeven[i];
    }
    for(i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", function(event) {
            event.stopPropagation();
            var selected = event.target;
            if(selected.innerHTML === correctSeven){
                playerScore += 1;
                console.log(playerScore);
                result.textContent = "Correct!";
                scoreUpdate();
            } else {
                //this is also where time reduction will go.
                result.textContent = "Incorrect!";
                return;
            }
            incorrect();
            setEight();
        });
    }
    
}
function setEight(){
    var questEight = ["if i =! 5 then", "if (i <> 5)", "if i <> 5", "if (i != 5)"];
    var correctEight = "if (i != 5)";
    question.textContent = "How to write an IF statement for executing some code if i is NOT equal to 5?";
    for(i = 0; i < answers.length; i++){
        answers[i].textContent = questEight[i];
    }
    for(i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", function(event) {
            event.stopPropagation();
            var selected = event.target;
            if(selected.innerHTML === correctEight){
                playerScore += 1;
                console.log(playerScore);
                result.textContent = "Correct!";
                scoreUpdate();
            } else {
                //this is also where time reduction will go.
                result.textContent = "Incorrect!";
                return;
            }
            incorrect();
            End();
        });
    }
    
}           