var show = _getId("show");
var test = _getId("test"); // NOT USE THIS TO TEST SCROLL; SCROLL DOES NOT WORK ON DISPLAY:NONE ELEMENTS.
var hide = _getId("hide");
var scrollTop = _getId("test_scroll");
var scrollToHere = _getId("test_scrollTo");

show.onclick = function() {
    _fadeIn(test, 2000);
}

hide.onclick = function() {
    _fadeOut(test, 2000);
}

scrollTop.onclick = function() {
    _scrollTo(scrollToHere, 2000);
}
