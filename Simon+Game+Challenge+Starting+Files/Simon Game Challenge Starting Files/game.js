var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
    
};
var randomNumber = Math.floor(Math.random() * 4);

var randomChoosenColor = buttonColors[randomNumber];
gamePattern.push(randomChoosenColor);

if (randomNumber === 0) {
    $("#red").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
}
else if (randomNumber === 1) {
    $("#blue").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
}
else if (randomNumber === 2) {
    $("#green").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
}
else if (randomNumber === 3) {
    $("#yellow").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
};