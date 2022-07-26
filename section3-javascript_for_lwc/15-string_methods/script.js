let str = "Hello guys doing I hope your are doing good";

// includes()
// the characters of a specified string
let check = str.includes("hope");
console.log(check);

// indexOf()
// The indexOf() method returns the position
// occurrence of a specified value in a string
let index = str.indexOf("doing");
console.log(index);

// startsWith()
// determines whether a string begins with the characters
// of a specified string
console.log(str.startsWith("Hello"));

// slice()
// method extracts parts of a string and returns the
// extracted parts in a new string
let newStr = str.slice(0, 5);
console.log(newStr);

// toLowerCase()
// converts string to lowerCase letter
let x = "My naME is Leonardo";
console.log(x.toLocaleLowerCase());

// toUpperCase()
// converts string to upperCase letter
console.log(x.toUpperCase());

// trim()
// removes whitespaces from both sides of a string
let searchText = "      salesforce lwc  ";
console.log(searchText);
console.log(searchText.trim());

