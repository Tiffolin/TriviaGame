$(document).ready(function(){
//test to see if js file is connected to html file
var docReady = "document ready";
console.log(docReady);

//timer function
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        //when timer == 0, the main body disappears, and the scoreboard appears
        if (--timer < 0) {
            $("#main").hide();
            $("#scoreboard").show();
        }
    }, 1000);
}


//onclick of start button the following happens:
    // the button disappears, the main body with questions appear
    // timer starts
$(".start").click(function(){
     $(this).hide();
     $("#main").show();

    //counter
    var min = 60*2,
    display = document.querySelector('#timer');
    startTimer(min, display);
});


//only 1 answer is allowed to be selected per question 
//this was achieved by using type:radio btns and assigning them the same names in html


//for each question, if selected ansSelected == correctAns, then ++ to right
//else ++ to wrong

//create an empty array
//when the user selects a btn, it will push the corresponding value into the empty array
var userSelected =[];

$(".answer").click(function(){
    var ansSelected = $(this).attr("value");
    // console.log(ansSelected);
    userSelected.push(ansSelected);
    // console.log(userSelected);
    matchAns();
    // emptAns();
});

//the correct answers
var correctAns = [4, 7, 11, 13, 17, 24, 25];

//function to determine whether the user selected the correct answer
function matchAns(){
    var right = 0;
    var wrong = 0;

    for(i=0; i<userSelected.length; i++){    

    if (userSelected[i] == correctAns[i]){
    // console.log ("true");
    right++;
    $("#rightNum").html(right);
    }

    else {
    // console.log ("false");
    wrong++;
    $("#wrongNum").html(wrong);
    }


}};

// var unanswered = 0;

// function emptAns(){
//     if(!$("input[name='ans1']" || "input[name='ans2']"|| "input[name='ans3']" || "input[name='ans4']"||"input[name='ans5']" || "input[name='ans6']"|| "input[name='ans7']" : "checked").val()) {
//     console.log("unanswered");
//     unanswered++;
//     $("#unanswered").html(unanswered);
//     }
    
//     else{
//     matchAns();
//     }
// }


//when submit button is clicked, the main body disappears, and the scoreboard appears
$(".submit").click(function(){
    $(this).hide();
    $("#main").hide();
    $("#scoreboard").show();
});


});