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
