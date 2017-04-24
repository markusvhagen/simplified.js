var test = _getId("test");
var hidebtn = _getId("hide");
var showbtn = _getId("show");
var hidebtn = document.getElementById("hide");
var showbtn = document.getElementById("show");

hidebtn.onclick = function hide() {
    _hide(test);
    // test.style.display = "none";
    console.log("Kjører hide");
}

showbtn.onclick = function show() {
    _show(test);
    console.log("Kjører show");
}
