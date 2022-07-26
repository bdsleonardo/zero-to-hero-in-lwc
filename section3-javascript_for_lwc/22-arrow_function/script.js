// Arrow function

// function abc(){
//     console.log('hello');
// }

// function sum(data){
//     let sum = data + 10;
//     return sum;
// }
// sum();

// const abc = ()=> console.log('hello');
// abc();

// const sum = (data1, data2) =>{
//     let sum = data1 + data2 + 10;
//     return sum;
// }

// const sum = (data1, data2) => data1 + data2 + 10;
// console.log(sum(4, 5));

// var arr = [1,2,3,4];
// arr.map((item)=>{
//     return item * 2;
// });
// let newArr = arr.map((item) => item * 2);
// console.log(newArr);

// problem solved by arrow function
let obj = {
    name : 'Leonardo',
    getName : function(){
        //console.log(this.name);
        const fullName=()=>{
            console.log(this.name);
            console.log('my full name is ' + this.name + ' Brito');
        }
        fullName();
    }
}
obj.getName();

