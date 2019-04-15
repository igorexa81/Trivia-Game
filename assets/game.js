$(document).ready(function () {
var options = [
    {
        question: "What is generally considered to be the first pony car?",
        choice: ["Chevrolet Camaro", "Ford Mustang", "Pontiac Firebird", "Mercury Cougar"],
        answer: 1,
    },
    {
        question:"What was the first Japanese car to be produced in the United States?",
        choice: ["Toyota Camry", "Nissan Maxima", "Mazda Miata","Honda Accord"],
        answer: 3,
    },
    {
        question:"What car sold more than one million units in 1965, setting a record that still stands today?",
        choice: ["Pontiac Gto","Chevrolet Impala","Ford Thunderbird","Buick Wildcat"],
        answer: 1,
    },
    {
        question:"What was the first car to break the sound barrier?",
        choice: ["Hennessey Venom", "Buggati Veyron","Thrust Ssc","Koenigsegg Agera R"],
        answer: 2,
    },
    {
        question:"What year was the Corvette first introduced?",
        choice: ["1963","1953","1943","1973"],
        answer: 1,
    },
    {
        question:"What was the first car to be mass-produced?",
        choice:["Model A", "Packard","Model T","Duryea Motor Wagon"],
        answer: 2,
    },
    {
        question: "What was the first car launched into space?",
        choice:["Tesla Roadster","Rolls-Royse Vision","Porsche 911","Rinspeed Oasis?"],
        answer: 0,
    },
    {
        question: "The inventor of cruise control was?",
        choice: ["A Robot", " A 12 year old child", "A homeless man", "A Blind Man"],
        answer: 3,
    },
    {
        question:"How much did the first Ford Mustang cost?",
        choice: ["$2,368", "$2,944", "$3484", "$5,000"],
        answer: 0,
    },
    {
        question:"What animal is on the Porsche logo?",
        choice:["Leopard","Bull", "Bird","Horse"],
        answer: 3,
    },
        
]

$("#start").click(startGame);

var time = 40;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
var notAnswered = 0;


 





function startGame(){
$('#start').hide();

for(var i = 0; i < 10; i++){
    $('#questionblock').append( "<p>" + options[i].question + "</p>");
    for(var j = 0; j < 4; j++){
        $('#questionblock').append( "<input type='radio' id='answer" + i + j + "' name='question" + i + "' value='" + j + "'>"); 
        $('#questionblock').append( "<label for='answer" + i + j + "'>" + options[i].choice[j] + "</label>"); 
    }
}   
    $('#questionblock').append('<button class="btn" id="done">Done</button>');
    $("#done").click(stopTimer);

$("#timeLeft").text(time);
 intervalId = setInterval(count, 1000);
}

 function count(){
     time--;
     if (time >= 0) {
         $("#timeLeft").text(time);
     }
     else { 
        stopTimer();
     }
 }

 function stopTimer(){
    clearInterval(intervalId);
    calculate();
 }
     
 
function calculate(){

    for (var i=0; i < 10; i++) {

        if($("input:radio[name='question" + i + "']:checked").val() == undefined)
           notAnswered++;
         else if($("input:radio[name='question" + i + "']:checked").val() == options[i].answer)
         correctAnswers++;
         else incorrectAnswers++;
        }
        $('#questionblock').hide();
        $('#timeLeft').hide();
        $('#totals').append('<p>Correct Answers: ' +correctAnswers + '</p>');
        $('#totals').append('<p>Incorrect Answers: ' +incorrectAnswers + '</p>');
        $('#totals').append('<p>Not Answered: ' +notAnswered + '</p>');
}





})