
//let element = document.querySelector('div');
let element = document.querySelector('.abc');
element.style.color = 'red';
console.log(element);
console.log(element.innerText);
//console.log(element.innerHTML);

let elementAll = document.querySelectorAll('div');
console.log(elementAll);
// Array.from(elementAll).forEach(function(item){
//     item.style.color = 'red';
// });
Array.from(elementAll).map(function(item){
    return item.style.color = 'green';
});