let obj = {
    name: 'Salesforce',
    age: 23,
    dob: '23/10/1990'
}

// Object.keys()
console.log(Object.keys(obj));

// Object.values()
console.log(Object.values(obj));

// JSON.stringfy()
let str = JSON.stringify(Object.keys(obj));
console.log(str);

// JSON.parse()
console.log(JSON.parse(str));


