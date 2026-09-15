var func = function () {
    alert("I got clicked!");
};
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", func);
}
