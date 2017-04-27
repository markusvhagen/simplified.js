/*
    Simplified.js
    Licensed under the MIT license.
*/

"use strict";

/* All functions have "_" in front of it. This is to prevent it from
overwriting any other functions in another file */

/* === DEFINITIONS === */

let linearSpeed = {
    default: 400,
    slow: 800,
    fast: 200,
    decideSpeed: function (stringInput) {
        if (stringInput === undefined) {
            return (this.default);
        }
        // Only return if number is not integer.
        else if (!Number.isInteger(stringInput)) {
            if (stringInput == "slow") {
                return (this.slow);
            }
            else if (stringInput == "fast") {
                return (this.fast);
            }
        }
        else {
            return (stringInput);
        }
    }
};

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

function _fadeIn(el, timeInput) {
    let time = linearSpeed.decideSpeed(timeInput);
    let loopRounds = Math.ceil(time/16);
    let elOpacity = 0;
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

function _fadeOut(el, timeInput) {
    let time = linearSpeed.decideSpeed(timeInput);
    let loopRoundsTotal = Math.ceil(time/16);
    let elOpacity = 1;
    let loopRoundsNow = Math.ceil(time/16);
    el.style.opacity = 1;
    var fadeOutInterval = setInterval(function() {
        if (loopRoundsNow <= 0) {
            clearInterval(fadeOutInterval);
            el.style.display = "none";
        }
        el.style.opacity = loopRoundsNow/loopRoundsTotal;
        loopRoundsNow--;
    }, 16);
}

function _scrollToTop(timeInput) {
    let time = linearSpeed.decideSpeed(timeInput);
    let scrollPos = window.scrollY;
    if (scrollPos == 0) {
        return true;
    }
    else {
        let loopRoundsTotal = Math.ceil(time/16);
        let pixelMovePerLoop = Math.ceil(scrollPos/loopRoundsTotal);
        let loopRoundsNow = 0;
        var scrollTopInterval = setInterval(function() {
            if (loopRoundsNow >= loopRoundsTotal) {
                clearInterval(scrollTopInterval);
                return true;
            }
            scrollPos -= pixelMovePerLoop;
            window.scrollTo(0, scrollPos);
            loopRoundsNow++;
        }, 16);
    }
}

// TODO: Seems like there is a little offset to the top sometimes. Why? Is there a fix?
function _scrollTo(el, timeInput) {
    let time = linearSpeed.decideSpeed(timeInput);
    let scrollPos = window.scrollY;
    let scrollToPos = el.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    let loopRoundsTotal = Math.ceil(time/16);
    let loopRoundsNow = 0;
    // If element has a lower Y-coordinate then starting scroll position.
    if (scrollPos > scrollToPos) {
        let pixelMovePerLoop = Math.abs(Math.ceil((scrollPos - scrollToPos)/loopRoundsTotal));
        var scrollToElementInterval = setInterval(function() {
            if (loopRoundsNow >= loopRoundsTotal) {
                clearInterval(scrollToElementInterval);
                return true;
            }
            scrollPos -= pixelMovePerLoop;
            window.scrollTo(0, scrollPos);
            loopRoundsNow++;
        }, 16);
    }
    // If element has a higher Y-coordinate then starting scroll position.
    else if (scrollPos < scrollToPos) {
        let pixelMovePerLoop = Math.abs(Math.ceil((scrollPos - scrollToPos)/loopRoundsTotal));
        var scrollToElementInterval = setInterval(function() {
            if (loopRoundsNow >= loopRoundsTotal) {
                clearInterval(scrollToElementInterval);
                return true;
            }
            scrollPos += pixelMovePerLoop;
            window.scrollTo(0, scrollPos);
            loopRoundsNow++;
        }, 16);
    }
}
