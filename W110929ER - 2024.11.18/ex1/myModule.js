function a() {
  console.log("a ran..");
}

function b() {
  a();
  console.log("b ran..");
}

// BAD!
// exports = { b: 5 }; //BAD!

// OK never use any of the other ways
// exports.b = 5;
// module.exports.c = 10;

// BEST at end of module, do not use any of the other ways
// module.exports = { b, a, c: 5, d: () => {} };
module.exports = 5;

console.log("myModule.js", module.exports);
