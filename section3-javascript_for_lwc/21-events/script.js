// function firsFunction(){
//     console.log('Hurray');
// }

// let btn = document.querySelector('button');
// btn.addEventListener('click', firsFunction);

// document.addEventListener('mousemove', handler);
// function handler(){
//     document.querySelector('.demo').innerHTML = Math.random();
// }

// function removeHandler(){
//     document.removeEventListener('mousemove', handler);
// }

document.addEventListener('hello', function(data){
    console.log('hello has called and send ', data.detail);
});

function callCustomMethod(){
    let event = new CustomEvent('hello', {
        detail : {name : "Leonardo"}
    });
    document.dispatchEvent(event);
}
