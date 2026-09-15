document.querySelector(".w.drum").addEventListener("click", function() {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    document.querySelector(".w.drum").style.color = "white";
});
document.querySelector(".a.drum").addEventListener("click", function(){
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
});
document.querySelector(".s.drum").addEventListener("click", function() {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
});
document.querySelector(".d.drum").addEventListener("click", function() {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
});
document.querySelector(".j.drum").addEventListener("click", function() {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
});
document.querySelector(".k.drum").addEventListener("click", function() {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
});
document.querySelector(".l.drum").addEventListener("click", function() {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
});