for (var i = 0; i < document.querySelector(".button").clientHeight; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                document.querySelector(".w.drum").style.color = "white";
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                document.querySelector(".a.drum").style.color = "white";
                break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                document.querySelector(".s.drum").style.color = "white";
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                document.querySelector(".d.drum").style.color = "white";
                break;
            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                document.querySelector(".j.drum").style.color = "white";
                break;
            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                document.querySelector(".k.drum").style.color = "white";
                break;
            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                document.querySelector(".l.drum").style.color = "white";
                break;
            default:
                console.log(buttonInnerHTML);
        }
    });
}










// document.querySelector(".w.drum").addEventListener("click", function() {
//     
// });
// document.querySelector(".a.drum").addEventListener("click", function(){
//     var audio = new Audio("sounds/tom-2.mp3");
//     audio.play();
// });
// document.querySelector(".s.drum").addEventListener("click", function() {
//     var audio = new Audio("sounds/tom-3.mp3");
//     audio.play();
// });
// document.querySelector(".d.drum").addEventListener("click", function() {
//     var audio = new Audio("sounds/tom-4.mp3");
//     audio.play();
// });
// document.querySelector(".j.drum").addEventListener("click", function() {
//     var audio = new Audio("sounds/snare.mp3");
//     audio.play();
// });
// document.querySelector(".k.drum").addEventListener("click", function() {
//     var audio = new Audio("sounds/crash.mp3");
//     audio.play();
// });
// document.querySelector(".l.drum").addEventListener("click", function() {
//     var audio = new Audio("sounds/kick-bass.mp3");
//     audio.play();
// });