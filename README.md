# simplified.js
A javascript library which aims to simplify some javascript functions.

## Installation
It is important that you important simplified.js before importing your own script.
```
<script src="https://raw.githubusercontent.com/markusvhagen/simplified.js/master/src/simplified.js"></script>
<script src="myScript.js"></script>
```
If you want, you can also download the code itself by going to [the raw source code](https://raw.githubusercontent.com/markusvhagen/simplified.js/master/src/simplified.js) and clicking `CTRL + S`.

## Functions in simplified.js
All functions in simplified.js has a underscore `_` in front. This is to prevent functions in simplifed.js from overwriting functions in your own .js-file.

### `_getId(el)`
Returns an element as an object. Takes string as argument. Equivalent of `document.getElementById`.

## Timing with simplified.js
Functions that can be timed has parameters for it, meaning that you can pass arguments regarding the timing of a function. For now, simplified.js only support linear timing, meaning the same speed of the animation in all phases. Timing is passed as an argument in milliseconds. If no argument is passed, the timing will be set to `default`, which is `400ms`.

In other words, you may pass an argument for time in the following ways:
* As an integer with milliseconds.
* As either `"slow"` (800 ms) or  `"fast"` (200 ms).  
* Passing no argument, and setting the speed to default.

## Validating arguments with simplified.js
Simplified.js uses the object validation for validating function arguments. The validation-object has two functions; `validateSingleArgument` and `validateMultipleArguments`. The object was originally made to validate arguments passed to simplified.js-function, but you can also use it. It works as follows;

```
javascript
function myFunc(arg1, arg2) {
    if(validate.validateMultipleArguments(arg1, arg2, "string", "number")) {
        console.log("I will only print if arg1 is a string and arg2 is a number");
    }
}
```
