const fs = require("node:fs");
const path = require("node:path");

const filePath = path.resolve(__dirname, "./a.txt");

console.log("start sync");
try {
  console.log("file:", fs.readFileSync(filePath, "utf8"));
} catch (e) {
  console.log("error in sync");
}
console.log("end sync");

console.log("start cb");
fs.readFile(filePath, { encoding: "utf8" }, (error, file) => {
  if (error) {
    console.log("error in cb");
    return;
  }

  console.log(file);
  console.log("end cb");
});

console.log("start promise");
// fs.promises / require('fs/promises')
fs.promises
  .readFile(filePath, "utf8")
  .then((file) => {
    console.log(file);
    console.log("end promise");
  })
  .catch((e) => console.log("error in promise"));

runReadFile();
async function runReadFile() {
  try {
    const file = await fs.promises.readFile(filePath, "utf8");
    console.log("file: ", file);
  } catch (e) {
    console.log("error in promise async/await version");
  }
}
