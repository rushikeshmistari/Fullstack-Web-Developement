var img = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];

var num1 = Math.floor(Math.random() * 6);
var num2 = Math.floor(Math.random() * 6);

if (num1 > num2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🎉";
    document.querySelector(".img1").setAttribute("src", img[num1]);
    document.querySelector(".img2").setAttribute("src", img[num2]);
} else if (num2 > num1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🎉";
    document.querySelector(".img1").setAttribute("src", img[num1]);
    document.querySelector(".img2").setAttribute("src", img[num2]);
} else {
    document.querySelector("h1").innerHTML = "It's a Draw! 🤝";
    document.querySelector(".img1").setAttribute("src", img[num1]);
    document.querySelector(".img2").setAttribute("src", img[num2]);
}