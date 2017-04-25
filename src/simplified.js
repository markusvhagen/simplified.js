/*
    Authors: Markus Valås Hagen & Jørgen Jensvold
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
        // Only return if number is integer.
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
        if (loopRoundsTotal <= 0) {
            clearInterval(fadeOutInterval);
            el.style.display = "none";
        }
        el.style.opacity = loopRoundsNow/loopRoundsTotal;
        loopRoundsNow--;
    }, 16);
}

function _scrollToTop(timeInput) {
    let time = linearSpeed.decideSpeed(timeInput);
    let pos = window.scrollY;
    if (pos == 0) {
        return true;
    }
    else {
        let loopRoundsTotal = Math.ceil(time/16);
        let pixelMovePerLoop = Math.ceil(pos/loopRoundsTotal);
        let loopRoundsNow = 0;
        var scrollTopInterval = setInterval(function() {
            if (loopRoundsNow >= loopRoundsTotal) {
                clearInterval(scrollTopInterval);
                return true;
            }
            pos -= pixelMovePerLoop;
            window.scrollTo(0, pos);
            loopRoundsNow++;
        }, 16);
    }
}
