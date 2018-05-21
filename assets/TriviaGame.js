
  //$( document ).ready(function() {
      // alert('Document Ready!');
var random_result;
var lost = 0 ;
var win = 0 ;
var previous = 0;

var resetAndstartGame = function ()  {
  $(".crystals").empty();

var images = [

      "assets/images/blue.jpg", 

      "assets/images/green.jpg",

      "assets/images/red.jpg",

      "assets/images/yellow.jpg",

]


random_result = Math.floor(Math.random() * 120 )  + 9;

$("#result").html("Number to Guess " + random_result);


for(var i = 0; i < 4; i++){

var random = Math.floor(Math.random() * 11)  * 1;
// console.log(random);

var crystal = $("<img>");
     crystal.attr({
        "class": 'crystal',
        "data-random": random,
        "src":images[i]
        });

      crystal.html(random);

    $(".crystals").append(crystal);

  }
  $("#previous").html("Total Score: " + previous);

}

resetAndstartGame();

$(document).on('click', ".crystal", function () {

var num = parseInt($(this).attr('data-random'));

previous+= num;

$("#previous").html("Total Score:" +  previous);

    console.log(previous);

if(previous > random_result){
    lost++;
    $("#lost").html("You Lost" + lost);
    alert ("You Lost");
    previous = 0;
    resetAndstartGame();
}

else if(previous === random_result){
    win++;
    $("#win").html("You Win!" + win);
    alert ("YOU WIN!");
    previous = 0;
    resetAndstartGame();
}

   // console.log(previous);
   // var result = num + 5;
   // consol.log(num, ' + ', result);

});
//});