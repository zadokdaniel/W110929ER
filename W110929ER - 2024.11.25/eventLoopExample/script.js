document.querySelector("button").addEventListener("click", function () {
  console.log("clicked");
});

function count(from, to, cb) {
  for (let i = from; i < to; i++) {
    if (i % 500 === 0) {
      console.log(i);
    }
  }

  cb();
}

function countAsync() {
  let from = 0,
    to = 1000;

  const cb = () => {
    if (to >= 1_000_000) {
      return;
    }
    setTimeout(() => {
      from += 1000;
      to += 1000;

      count(from, to, cb);
    }, 0);
  };

  count(from, to, cb);
}

countAsync();

// console.time("100000");
// for (let i = 0; i < 1_000_000; i++) {
//   console.log(i);
// }
// console.timeEnd("100000");
