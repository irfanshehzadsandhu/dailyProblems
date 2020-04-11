/*
This problem was asked by Apple.

Implement a job scheduler which takes in a function f and an integer n, 
and calls f after n milliseconds.
*/

function jobSchedular(f, n) {
    setTimeout(function () {
        f();
    }, n);
}

jobSchedular(function () {
    console.log("I am a schedular")
}, 3000);