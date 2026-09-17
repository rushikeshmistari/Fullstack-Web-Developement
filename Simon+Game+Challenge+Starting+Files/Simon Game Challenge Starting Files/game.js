var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
    
};
var randomNumber = Math.floor(Math.random() * 4);

var randomChoosenColor = buttonColors[randomNumber];
gamePattern.push(randomChoosenColor);

$("#" + randomChoosenColor).fadeOut(200).fadeIn(200);
var sound = new Audio('sounds/' + randomChoosenColor + '.mp3');
sound.play();