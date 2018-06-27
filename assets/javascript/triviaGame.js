// set document so everything is down loaded before game begins.
$(document ).ready(function() {

// some notes
/* <input type="radio" name="q2" value="q2_a2"> 19cfd64<br> */
/* <input type="radio" name="q2" value="q2_a3"> 19gt59<br/> */
/* <input type="text" id="abc"> */

// define variables...

var correctAns = 0;
var wrongAns = 0;
var delayButtonAlert;
var timeLeft = 10;


function resultCount(){
correctAns = 0;
wrongAns = 0;
$("#right").text(correctAns);
$("#wrong").text(wrongAns);
  
// variable for textData are the two different types of divs from CSS boostrap
var textData = $(".alert alert-primary","alert alert-success" ).val();
// variable "checkQ1, checkQ2, etc... are the checked/selected input values from each of the 10 questions."
var checkQ1 = $("input[name='q1']:checked").val(); //q1_a1
var checkQ2 = $("input[name='q2']:checked").val(); //q2_a2
var checkQ3 = $("input[name='q3']:checked").val(); 
var checkQ4 = $("input[name='q4']:checked").val(); 
var checkQ5 = $("input[name='q5']:checked").val(); 
var checkQ6 = $("input[name='q6']:checked").val(); 
var checkQ7 = $("input[name='q7']:checked").val(); 
var checkQ8 = $("input[name='q8']:checked").val(); 
var checkQ9 = $("input[name='q9']:checked").val(); 
var checkQ10 = $("input[name='q10']:checked").val(); 

// an array between [] contains the variable of the correct answers
var rightAns = ["q1_a2","q2_a3","q3_a3","q4_a2","q5_a4","q6_a4","q7_a2","q8_a1","q9_a3","q10_a1"]
// an array between [] contains the variable of the users answers are the checked or selected answers
var userAns = [checkQ1,checkQ2,checkQ3,checkQ4,checkQ5,checkQ6,checkQ7,checkQ8,checkQ9,checkQ10]
           //   userAns["q1_a3","q2_a1"]



for(var i=0;i<rightAns.length;i++){
  if(rightAns[i] === userAns[i]){
    correctAns++;
    // alert: ("You Got All Ten Questions Correct, You Win!");
  }
  else{
    wrongAns++;
    // alert: ("Sorry, You Got the following questions incorrect ");
  }
}

$("#right").text(correctAns);
$("#wrong").text(wrongAns);
$('input[type=radio]').prop('checked', false);
}



// alert("Alert #1");
// }, 1000);

//  //  Start on click.
$("#startGame").on("click", function() {
  $("#right").text(0);
$("#wrong").text(0);
  timeLeft = 30;
//    //  Set the button alert's timeout to run three seconds after the function's called.
delayButtonAlert = setInterval(timer,1000);

function timer()
{
  if(timeLeft === -1)
  {
    clearTimeout(delayButtonAlert);    
    resultCount();
  }
  else{
    $("#counter").text(timeLeft);
    timeLeft--;
  }
}
});


//  Cancel on click.
// $("#cancel").on("click", function() {
// });

$("#finalScore").on("click",function(){
  clearTimeout(delayButtonAlert);
  resultCount();
});
});
