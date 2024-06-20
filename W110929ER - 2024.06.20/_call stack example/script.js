// open as file (without live share)

// debugger;

console.log("call stack example");

a();

function a() {
  console.log("a start");

  try {
    console.log("start try");
    b();

    console.log("end try");
  } catch (e) {
    console.log("catched", e);
  }

  console.log("a end");
}

function b() {
  console.log("b start");

  c();
  e();

  console.log("b end");
}

function c() {
  console.log("c start");
  d();
  console.log("c end");
}

function d() {
  console.log("d start");

  throw new Error("something went wrong");

  console.log("d end");
}

function e() {
  console.log("e start");
  console.log("e end");
}
