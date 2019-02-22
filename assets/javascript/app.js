$(document).ready(function(){
//test to see if js file is connected to html file
var docReady = "document ready";
console.log(docReady);

//counter function
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        //when counter == 0, the main body disappears, and the scoreboard appears
        if (--timer < 0) {
            $("#main").hide();
            $("#scoreboard").show();
        }
    }, 1000);
}


//onclick of start button the following happens:
    // the button disappears, the main body with questions appear
    // counter starts
$(".start").click(function(){
     $(this).hide();
     $("#main").show();

    //counter
    var min = 60*2,
    display = document.querySelector('#timer');
    startTimer(min, display);
});


//only 1 answer is allowed to be selected per question
$('input:checkbox').click(function() {
   console.log( $('input:checkbox'));
    // .not(this).prop('checked', false);
});


//for each question, if selected answer == answer, then ++ to right
//else ++ to wrong



//when submit button is clicked, the main body disappears, and the scoreboard appears
$(".submit").click(function(){
    $(this).hide();
    $("#main").hide();
    $("#scoreboard").show();
});


});