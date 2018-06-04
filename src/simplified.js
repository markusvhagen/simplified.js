/*
    Simplified.js
    Licensed under the MIT license.
*/

"use strict";

/* All functions have "_" in front of it. This is to prevent it from
overwriting any other functions in another file */

/* === OBJECTS === */

let linearSpeed = {
    default: 400,
    slow: 800,
    fast: 200,
    decideSpeed: function (stringInput) {
        if (stringInput === undefined) {
            return this.default;
        }
        // Only return if number is not integer.
        else if (!Number.isInteger(stringInput)) {
            if (stringInput == "slow") {
                return this.slow;
            }
            else if (stringInput == "fast") {
                return this.fast;
            }
        }
        else {
            return stringInput;
        }
    }
};

let validation = {

    validateSingleArgument: function (argument, parameterType) {
        if (typeof(argument) === parameterType) {
            return true;
        }
        else {
            return false;
        }
    },

    validateMultipleArguments: function() {
        // Arguments is an object which is in JS natively.
        let numberOfArguments = arguments.length;
        let validationSuccess = true;

        // Only proceed if numberOfArguments is even, meaning that every argument for input-argument
        // has a corresponding argument for which type this argument should be.
        if (numberOfArguments % 2 == 0) {
            for (var i = 0; i <= ((numberOfArguments/2)-1); i++) {
                let currentCorrespondingArgument = arguments[(numberOfArguments/2)+i];
                if (!(typeof arguments[i] == currentCorrespondingArgument)) {
                    validationSuccess = false;
                    break;
                }
            }
        }

        else {
            return false;
        }
        return validationSuccess ? true : false;
    }

};

/* ==== SELECTORS ==== */

// Argument must be id of element
function _getElById(id) {
    if (validation.validateSingleArgument(id, "string")) {
        return document.getElementById(id);
    }
}

/* ==== METHODS & EVENTS ==== */

function _getContent(el) {
    if (validation.validateSingleArgument(el, "object")) {
        return el.innerHTML;
    }
}

function _setContent(el, content) {
    if (validation.validateMultipleArguments(el, content, "object", "string")) {
        el.innerHTML = content;
    }
}

function _show(el) {
    if (validation.validateSingleArgument(el, "object")) {
        if (el.style.display == "block") {
            return false;
        }
        else {
            el.style.display = "block";
        }
    }
}

function _hide(el) {
    if (validation.validateSingleArgument(el, "object")) {
        if (el.style.display == "none") {
            return false;
        }
        else {
            el.style.display = "none";
        }
    }
}

function _getCSSValue(el, property) {
    if (validation.validateMultipleArguments(el, property, "object", "string")) {
        let propVal = window.getComputedStyle(el).getPropertyValue(property);
        return propVal;
    }
}

function _setCSSValue(el, property, val) {
    if (validation.validateMultipleArguments(el, property, val, "object", "string", "string")) {
        el.style[property] = val;  // Does not work when trying to access with el.style.property. Therefore el.style[property].
    }
}

function _fadeIn(el, timeInput) {
    if (validation.validateMultipleArguments(el, "object")) {
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
}

function _fadeOut(el, timeInput) {
    if (validation.validateMultipleArguments(el, "object")) {
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
            if (document.body.scrollTop === 0) {
                clearInterval(scrollTopInterval);
            }
            scrollPos -= pixelMovePerLoop;
            window.scrollTo(0, scrollPos);
            loopRoundsNow++;
        }, 16);
    }
}

function _scrollTo(el, timeInput) {
    if (validation.validateMultipleArguments(el, "object")) {
        let time = linearSpeed.decideSpeed(timeInput);
        let scrollPos = window.scrollY;
        let scrollToPos = el.getBoundingClientRect().y - document.body.getBoundingClientRect().y;
        let loopRoundsTotal = Math.ceil(time/16);
        let loopRoundsNow = 0;
        // If element has a lower Y-coordinate then starting scroll position.
        if (scrollPos > scrollToPos) {
            let pixelMovePerLoop = Math.abs(Math.ceil((scrollPos - scrollToPos)/loopRoundsTotal));
            var scrollToElementInterval = setInterval(function() {
                if (window.scrollY <= scrollToPos) {
                    clearInterval(scrollToElementInterval);
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
                if (window.scrollY >= scrollToPos) {
                    clearInterval(scrollToElementInterval);
                }
                scrollPos += pixelMovePerLoop;
                window.scrollTo(0, scrollPos);
                loopRoundsNow++;
            }, 16);
        }
    }
}

function _dynamicIntegerCounter(el, start, stop, timeInput) {
    if (validation.validateMultipleArguments(el, start, stop, "object", "number", "number")) {
        let time = linearSpeed.decideSpeed(timeInput);
        let difference = stop - start;
        let msPerStep = time / difference;
        let i = 0;

        var counterInterval = setInterval(function () {
            if (i == stop) {
                clearInterval(counterInterval);
            }
            el.innerHTML = i;
            i++;
        }, msPerStep);
    }
}
