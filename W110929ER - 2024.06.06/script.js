const keyName = "daniel";

const a = {
  [keyName]: "hello",
  ["shalom"]: "hello",
  ["s" + keyName]: "hello",
  "shalom 😎": "hello",
  myValidName: "hello",
  myFn: function myFn() {},
  myFn() {}, // synthatic sugar for the above

  keyName: keyName, // keyName: "daniel"
  keyName, // syntatic sugar for the above
};

console.log(a);
console.log(a.myFn);
console.log(a["shalom 😎"]);
console.log(a["shalom" + "😎"]);

const name = "danile";
const age = 29;
const email = "d@gmail.com";

const user = {
  // name: name,
  // age: age,
  // email: email,
  name,
  age,
  email,
};

console.log(user);

console.log("daniel \r\n says hi");
console.log("daniel \\n says hi");
console.log("daniel \" 'n says hi");


