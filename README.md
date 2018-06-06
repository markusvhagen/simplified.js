# simplified.js
A javascript library which aims to simplify some javascript functions. In the long run, it also aims to be a reference for javascript developers, which want to learn typical JS-tasks the native way, instead of using frameworks like jQuery. The source code is all one file, which makes it easy to search up a function, and see how that specific function works under the hood. Most of all, this project was started for my own learning sake.

## Installation
It is important that you important simplified.js before importing your own script.
```
<script src="https://cdn.rawgit.com/markusvhagen/simplified.js/master/src/simplified.js"></script>
<script src="myScript.js"></script>
```
If you want, you can also download the code itself by going to [the raw source code](https://raw.githubusercontent.com/markusvhagen/simplified.js/master/src/simplified.js) and clicking `CTRL + S`.

## Functions in simplified.js
All functions in simplified.js has a underscore `_` in front. This is to prevent functions in simplifed.js from overwriting functions in your own .js-file.

### `_getElById(id)`
Returns an element as an object. Takes string as argument. Equivalent of `document.getElementById("myId")`.

### `_getContent(el)`
Returns innerHTML of an element. Takes an object (for example by `_getElById()`) as argument. Equivalent of `document.getElementById("myId").innerHTML`.

### `_setContent(el, content)`
Sets innerHTML of a given element. Takes an object as the first argument, and a string as the second argument.

### `_show(el)`
Sets display of element to `block`. Takes an object as argument.

### `_hide(el)`
Sets display of element to `none`. Takes an object as argument.

### `_getCSSValue(el, property)`
Returns a value of an certain CSS-property of an element. Takes an object as the first argument, and string as the second argument.

### `_setCSSValue(el, property, val)`
Sets the value of a given CSS-property of an element. Takes object as first argument and string as the second and third argument.

### `_fadeIn(el, timeInput)`
Fades in an element, and sets display-property of element to block. Takes object as the first argument and number as the second argument. You can read more about the `timeInput`-argument in the chapter [Timing with simplified.js](#timing-with-simplified.js).

### `_fadeOut(el, timeInput)`
Fades out an element, and sets display-property of element to none. Takes object as the first argument and number as the second argument. You can read more about the `timeInput`-argument in the chapter [Timing with simplified.js](#timing-with-simplified.js).

### `_scrollToTop(timeInput)`
Scrolls up to the top of the page smoothly in given time. Takes a number as argument. You can read more about the `timeInput`-argument in the chapter [Timing with simplified.js](#timing-with-simplified.js).

### `_scrollTo(el, timeInput)`
Scrolls smoothly to a given element in given time. Takes an object as the first argument, and a number as the second argument. You can read more about the `timeInput`-argument in the chapter [Timing with simplified.js](#timing-with-simplified.js).

### `_dynamicIntegerCounter(el, start, stop, timeInput)`
Will make an animation for a given element of couting from a given number (`start`) to a given number (`stop`) in a given time. Takes object as the first argument, and a number as the second, third and fourth argument. You can read more about the `timeInput`-argument in the chapter [Timing with simplified.js](#timing-with-simplified.js).

### `_indexOf(inArray, searchFor)`
Given a sorted array, it will return the index of `searchFor`. If `searchFor` is not in the array, it will return `undefined`. Does not worked with mixed arrays, just arrays only existing of numbers or only existing of strings. Takes an array as first argument, and string or number as the second argument. Under the hood, `_indexOf` will do a binary search, which is faster than native JS (`array.indexOf()`), because it searches linearly.

## Timing with simplified.js
Functions that can be timed has parameters for it, meaning that you can pass arguments regarding the timing of a function. For now, simplified.js only support linear timing, meaning the same speed of the animation in all phases. Timing is passed as an argument in milliseconds. If no argument is passed, the timing will be set to `default`, which is `400ms`.

In other words, you may pass an argument for time in the following ways:
* As an integer with milliseconds.
* As either `"slow"` (800 ms) or  `"fast"` (200 ms).  
* Passing no argument, and setting the speed to default.

## Validating arguments with simplified.js
Simplified.js uses the object validation for validating function arguments. The validation-object has two functions; `validateSingleArgument` and `validateMultipleArguments`. The object was originally made to validate arguments passed to simplified.js-function, but you can also use it. It works as follows;

```javascript
function myFunc(arg1, arg2) {
    if(validation.validateMultipleArguments(arg1, arg2, "string", "number")) {
        console.log("I will only print if arg1 is a string and arg2 is a number");
    }
}
```
