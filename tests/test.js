var show = _getId("show");
var test = _getId("test");
var hide = _getId("hide");
var scrollTop = _getId("test_scroll");

show.onclick = function() {
    _fadeIn(test, 2000);
}

hide.onclick = function() {
    _fadeOut(test, 2000);
}

scrollTop.onclick = function() {
    _scrollToTop(10000);
}
