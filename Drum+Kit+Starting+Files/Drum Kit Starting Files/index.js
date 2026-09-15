// document.querySelector(".w.drum").addEventListener("click",function() {
//     alert("I got Clicked button w !!!");
// });
// 
// });
// document.querySelector(".s.drum").addEventListener("click", function() {
//     alert("You clicked button s !!!");
// });
// document.querySelector(".d.drum").addEventListener("click", function() {
//     alert("You clicked button d!!!");
// });
// document.querySelector(".j.drum").addEventListener("click", function() {
//     alert("You clicked button j!!!");
// });
// document.querySelector(".k.drum").addEventListener("click", function() {
//     alert("You clicked button k!!!");
// });
// document.querySelector(".l.drum").addEventListener("click", function() {
//     alert("You clicked button l!!!");
// });
document.querySelector(".w.drum").addEventListener("click", function() {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
});
document.querySelector(".a.drum").addEventListener("click", function(){
    var audio = new Audio("Drum Kit Starting Files/sounds/tom-2.mp3");
    audio.play();
});