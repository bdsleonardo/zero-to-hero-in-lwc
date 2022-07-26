
// function checkInSuccess(data){
//     return new Promise(function(resolve, reject){
//         if(data === "success"){
//             return resolve("successfully executed")            
//         }else{
//             return reject("unsuccessfully executed")
//         }
//     });
// }

// checkInSuccess('success').then(function(result){
//     console.log(result);
// }).catch(function(error){
//     console.error(error);
// });
//console.log(checkInSuccess('success'));

fetch('https://api.github.com/users/karkranikhil').then(function(result){
    return result.json();
}).then(function(response){
    console.log(response);
});

