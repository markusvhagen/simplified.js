"use strict";

/* All functions have "_" in front of it. This is to prevent it from
overwriting any other functions in another file */

/* ==== SELECTORS ==== */

// For divs only
function _getId(el) {
    return (document.getElementById(el));
}

// For all elements; class, div, name etc.
function _getElements(el) {
    return (document.querySelector(el));
}


/* ==== CSS ==== */

function _show(el) {
    if (el.style.display == "block") {
        return false;
    }
    else {
        el.style.display = "block";
        return true;
    }
}

function _hide(el) {
    if (el.style.display == "none") {
        return false;
    }
    else {
        el.style.display = "none";
        return true;
    }
}

function _fadeIn(el, time) {
    let elOpacity = 0;
    let loopRounds = Math.ceil(time/16);
    let numberLoopRoundsNow = 1;
    el.style.opacity = elOpacity;
    el.style.display = "block";
    var fadeInInterval = setInterval(function() {
        if (numberLoopRoundsNow >= loopRounds) {
            clearInterval(fadeInInterval);
        }
        el.style.opacity = numberLoopRoundsNow/loopRounds;
        numberLoopRoundsNow++;
    }, 16);
}

function _fadeOut(el, time) {
    const loopRoundsTotal = Math.ceil(time/16);
    let elOpacity = 1;
    let loopRoundsNow = Math.ceil(time/16);
    el.style.opacity = 1;
    var fadeOutInterval = setInterval(function() {
        if (loopRoundsTotal <= 0) {
            clearInterval(fadeOutInterval);
            el.style.display = "none";
        }
        el.style.opacity = loopRoundsNow/loopRoundsTotal;
        loopRoundsNow--;
    }, 16);
}
