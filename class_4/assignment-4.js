/* 
Create a function createGreeting that takes two parameters, name and age, and returns a greeting message using a template literal. The message should be in the format: "Hello, my name is {name} and I am {age} years old."

*/

function createGreeting(name, age) {
  return `Hello, my name is ${name} and I am ${age} years old`;
}

const res = createGreeting("Zohan", 25);
console.log(res);

/* 

Create a function calculateArea that takes two parameters, length and width. If the width is not provided, it should default to the value of length (making it a square). The function should return the area of the rectangle.

*/

const calculateArea = function (length, width = length) {
  if (length == width) {
    return length ** 2;
  } else {
    return length * width;
  }
};

console.log(calculateArea(6, 9));

/* 
Given an object user with an optional nested structure, create a function getStreetName that returns the street name if it exists, otherwise returns "Street not found".


*/

const user = {
  address: {
    street: {
      name: "CR Dutta Road",
    },
  },
};

const userWithoutStreet = {
  address: {},
};

function getStreetName(obj) {
  if (obj?.address?.street?.name) {
    return obj.address.street.name;
  }
  return "Street not found";
}

console.log(getStreetName(userWithoutStreet));

/* 
Create a function cleanUpString that takes a string, trims any leading or trailing whitespace, and replaces all occurrences of the word "white" with "red".

*/

function cleanUpString(str) {
  return str.trim().replaceAll("white", "red");
}
console.log(cleanUpString("   white is white   "));

/* 

Create a function processArray that takes an array of strings. Each string contains a name and age separated by a hyphen (e.g., "Zohan-25"). The function should:
Split each string into a name and age.
Filter out the ones where the age is less than 18.
Return an array of objects with the properties name and age.
Output: [{ name: "Zohan", age: 25 }, { name: "Saher", age: 19 }]

*/

const strAryInput = ["Zohan-25", "Wafi-17", "Saher-19"];

function processArray(ary) {
  const strAry = ary;

  const objAry = strAry.map((item) => {
    const str = item.split("-");
    const strObj = {
      name: str[0],
      age: str[1],
    };
    console.log(strObj);
    return strObj;
  });
  const filterObj = objAry.filter((item) => {
    return item.age > 18;
  });
  return filterObj;
}
console.log(processArray(strAryInput));
