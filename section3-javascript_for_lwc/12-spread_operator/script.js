// Spread Operator

// 1 Array
var arr = ["a", "b", "c"];
console.log(arr);
// array index start from zero
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
// add a new value
arr.push("d");
console.log(arr);

// 2 objects
var obj = {
    "name": "Salesforce",
    "age": 23,
    "fullName": "zero to hero"
}
console.log(obj["name"]);
console.log(obj.age);
console.log(obj["fullName"]);
obj.hobbies = "cricket";
console.log(obj);

// 3 Expanding of string
let greeting = "Hello everyone";
let charList = [...greeting];
console.log(charList);
console.log(charList[0]);
console.log(charList[10]);

// 4 Combining array
let arr1 = ["amazon", "google"];
let arr2 = ["facebook", "instagram"];
let arr3 = [...arr1, ...arr2];
console.log(arr3);
console.log(arr3[0] + ' and ' + arr3[1]);
console.log(arr3[2] + ' and ' + arr3[3]);

// 5 adding values to an array
let arr4 = ["a", "b", "c"];
let arr5 = ["Leonardo", ...arr4];
console.log('arr5: ');
console.log(arr5);

// 6 Combining objects
let obj1 = {name: "Salesforce",age: 37,date:"26/07/2022"
}
let obj2 = {name:"Facebook",age:"55","next":"Hello"}
let obj3 = {...obj1, ...obj2}
console.log('Obj3:');
console.log(obj3);

// 7 Shallow Copy
var arr10 = ["x", "y", "z"];
arr10.push(20);
console.log(arr10);

// var arr11 = arr10;
// arr11.push("Leonardo");
// console.log(arr11);

var arr11 = [...arr10];
arr11.push("Brito");
console.log(arr11);

// 8 Nested copy
var arrObj =[
    {name:"Torresmo",name:"Drama"}
]
// var arrObj1 = [...arrObj];
// console.log(arrObj1);
// arrObj1[0].name = "Superman";
// console.log(arrObj1);
// console.log(arrObj);

// Hack for nested copy
var arrObj1 = JSON.parse(JSON.stringify(arrObj));
arrObj1[0].name = "Superman";
console.log(arrObj1);
console.log(arrObj);
