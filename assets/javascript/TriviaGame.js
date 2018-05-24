// $( document ).ready(function() {

//  }

// start with a start function the game code will go in this function
var startbutton = function(){

// create the variables, such as the score, the question and the user input.
// these go inside the start function's {}
var correct = 0;
var incorrect = 0;
var question = "none";
var input = "none";
var answer = "none";


var ask = function(){ 
  input = prompt(question);
};


var score = function(){ 
  if(input == answer){ 
          correct = correct+1;
          alert("correct");
  }else{
          incorrect = incorrect+1;
          alert("incorrect");
  }
};


var lazy = function(){
  ask();
  score();
};


alert("welcome to Beatles Trivia! Test your knowledge of the Beatles by answering the next 10 questions within 3 minutes. The answers are case sensitive. Type your answers exaclty as diplayed.");

question = "What year did the Beatles first come to America?\n 1970, 1964, 1959 or 1962";
answer = "1964";
lazy ();

question = "What city in Germany did the Beatles get their start?\n Frankfurt, Berlin, Hamburg or Struttgart";
answer = "Hamburg";
lazy ();

question = "Which of these was NOT one a Beatles band name?\n Quarryman, Silver Beetles, Beach Boys or Beat Boys";
answer = "Beach Boys";
lazy ();

question = "Which Beatle crossed Abbey Road first?\n Paul, John, George or Ringo";
answer = "John";
lazy ();

question = "Who was the original drummer for the Beatles?\n Ringo Starr, Stuart Sutcliffe, Bill Wyman or Pete Best";
answer = "Pete Best";
lazy ();

question = "Which of these bands did a Beatles band member start after the Beatles broke up?\n Wings, Traveling Wilburys, Plastic Ono Band or All Three";
answer = "All three";
lazy ();

question = "Where were the Beatles originally established?\n London, Liverpool, Manchester or Lancashire";
answer = "Liverpool";
lazy ();

question = "What record label was founded by the Beatles?\n Apple Records, Parlophone, EMI or Liverpool Records";
answer = "Apple Records";
lazy ();

question = "Which Beatles song contains French lyrics?\n I Am the Walrus, Helter Skelter, Michelle or Help";
answer = "Michelle";
lazy ();

question = "What was the Beatles first single record?\n Love Me Do, I Saw Her Standing There, Please Please Me or Twist and Shout";
answer = "Love Me Do";
lazy ();


alert("Well done, you got " + correct + " out of 10");

}


// <button id="stop">Stop</button>
// <button id="resume">Resume</button>


// //  Interval Demonstration
// //  Set our number counter to 100.
// var number = 60;

// //  Variable that will hold our interval ID when we execute
// //  the "run" function
// var intervalId;

// //  When the stop button gets clicked, run the stop function.
// $("#stop").on("click", stop);

// //  When the resume button gets clicked, execute the run function.
// $("#resume").on("click", run);

// //  The run function sets an interval
// //  that runs the decrement function once a second.
// //  *****BUG FIX******** 
// //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
// // function run() {
//   // clearInterval(intervalId);
//   intervalId = setInterval(decrement, 1000);
// }

// //  The decrement function.
// function decrement() {

//   //  Decrease number by one.
//   number--;

//   //  Show the number in the #show-number tag.
//   $("#show-number").html("<h2>" + number + "</h2>");


//   //  Once number hits zero...
//   if (number === 0) {

//     //  ...run the stop function.
//     stop();

//     //  Alert the user that time is up.
//     alert("Time Up!");
//   }
// }

// //  The stop function
// function stop() {

//   //  Clears our intervalId
//   //  We just pass the name of the interval
//   //  to the clearInterval function.
//   clearInterval(intervalId);
// }

// //  Execute the run function.
// run();




