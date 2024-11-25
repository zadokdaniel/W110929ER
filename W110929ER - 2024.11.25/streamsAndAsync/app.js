const path = require("node:path");
const fs = require("node:fs");

const filePath = path.resolve(__dirname, "./text.txt");

console.time("readFileSync");
fs.readFileSync(filePath);
console.timeEnd("readFileSync");

console.time("readFile");
fs.promises.readFile(filePath).then((file) => {
  console.timeEnd("readFile");
});

// const ws = fs.createWriteStream(path.resolve(__dirname, "./hello.txt"));

// let i = 0;
// const intervalId = setInterval(() => {
//   ws.write("hello " + i++ + "\r\n", console.log);
// }, 2000);

// setTimeout(() => {
//   clearInterval(intervalId);
//   ws.end("ended");
// }, 20_000);

console.time("readStream");
const rs = fs.createReadStream(path.resolve(__dirname, "./text.txt"), {
  /*encoding: "utf8",*/
});
let i = 0;
rs.on("data", (chunk) => {
  console.log(`chunk #${i++}: `, chunk);
});
rs.on("end", () => {
  console.log("finished reading the file. Read " + rs.bytesRead + " bytes");
  console.timeEnd("readStream");
});
