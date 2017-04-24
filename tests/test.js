var show = _getId("show");
var test = _getId("test");
var hide = _getId("hide");

show.onclick = function() {
    _fadeIn(test, 2000);
}

hide.onclick = function() {
    _fadeOut(test, 2000)
}
