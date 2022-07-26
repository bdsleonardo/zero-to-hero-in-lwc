// setTimeout
let timerId = window.setTimeout(function(){
    console.log('hello');
}, 2000);
console.log(timerId);
clearTimeout(timerId);

// setInterval
let intervalId = window.setInterval(function(){
    console.log('hello');
}, 5000);

clearInterval(intervalId);