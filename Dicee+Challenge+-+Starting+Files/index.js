var img1 = "images\dice1.png";
var img2 = "images\dice2.png";
var img3 = "images\dice3.png";
var img4 = "images\dice4.png";
var img5 = "images\dice5.png";
var img6 = "images\dice6.png";
var img = [img1, img2, img3, img4, img5, img6];

var num1 = Math.floor(Math.random() * 6);
var num2 = Math.floor(Math.random() * 6);

if (num1 > num2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
    document.querySelector(".img1").setAttribute("src", img[num1]);
    document.querySelector(".img2").setAttribute("src", img[num2]);
} else if (num2 > num1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
    document.querySelector(".img2").setAttribute("src", img[num2]);
    document.querySelector(".img1").setAttribute("src", img[num1]);
} else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
    document.querySelector(".img1").setAttribute("src", img[num1]);
    document.querySelector(".img2").setAttribute("src", img[num2]);
};