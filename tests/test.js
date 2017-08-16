var show = _getElById("show");
var test = _getElById("test"); // NOT USE THIS TO TEST SCROLL; SCROLL DOES NOT WORK ON DISPLAY:NONE ELEMENTS.
var hide = _getElById("hide");
var scrollTop = _getElById("test_scroll");
var scrollToHere = _getElById("test_scrollTo");
var styleBtn = _getElById("styleBtn");
var counter = _getElById("counter");
var activateCounter = _getElById("activate_counter");

show.onclick = function() {
    _fadeIn(test, 2000);
}

hide.onclick = function() {
    _fadeOut(test, 2000);
}

scrollTop.onclick = function() {
    _scrollTo(scrollToHere, 2000);
}

styleBtn.onclick = function() {
    _setCSSValue(hide, "color", "yellow");
    _setContent(hide, "I like fish :D");
}

activateCounter.onclick = function() {
    _dynamicIntegerCounter(counter, 0, 50, "slow");
}

function doThis() {
    console.log("jaja");
}

_onClickOutsideOfElement(styleBtn, doThis());
