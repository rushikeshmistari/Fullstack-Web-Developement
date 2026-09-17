
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

$(document).keypress(function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

    var userChosenColor = $(this).attr("id");
    console.log(userChosenColor);
});