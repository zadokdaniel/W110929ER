/** Exercise
 * - write a file counting from 1 to 100 every second and then finishes with the word "finish". call the file counterStream.txt
 * - read the counterStream.txt file and show in the console the range it uses for example 1-finish
 * - copy the counterSream.txt file to a file named "counterStramCopy.txt"
 */

const fs = require("node:fs");
const path = require("node:path");

/** Exercise 1
 *  write a file counting from 1 to 100 every second and then finishes with the word "finish". call the file counterStream.txt
 *
 * 1. find the file path
 * 2. write to the file
 * 3. write to the file something every second
 * 4. write to the file incremented values every second
 */

// const filePath = path.resolve(__dirname, "./counterStream.txt");

// writeStreamIncrementedRange(filePath, {
//   end: 100,
//   endMessage: "finsihed",
// });

function writeStreamIncrementedRange(
  path,
  { start = 1, end = 10, intervalMS = 100, endMessage = "" },
  cb = () => {}
) {
  const ws = fs.createWriteStream(path, "utf8");

  let i = start;
  const intervalId = setInterval(() => {
    if (i > end) {
      clearInterval(intervalId);
      ws.end(endMessage, cb);
      return;
    }

    ws.write(`${i++}\r\n`);
  }, intervalMS);
}

/** Exercise 2
 *  read the counterStream.txt file and show in the console the range it uses for example 1-finish
 *
 *  1. find the file
 *  2. read the file
 *  3. find the first line of the first chunk
 *  4. find the last chunk
 *  5. find the last line of the last chunk
 *  6. log
 */

// const filePath = path.resolve(__dirname, "./counterStream.txt");

// readFirstLastLinesOfStream(filePath);

function readFirstLastLinesOfStream(path) {
  const rs = fs.createReadStream(path, {
    encoding: "utf8",
    highWaterMark: 90, // so it will not be one chunk. the number is also big enough so the first and last lines would not be cut into different chunks
  });

  let firstLine, lastChunk;
  rs.on("data", (chunk) => {
    if (typeof firstLine === "undefined") {
      firstLine = chunk.split("\r\n")[0];
    }

    lastChunk = chunk;
  });

  rs.on("end", () => {
    const lastLine = lastChunk.split("\r\n").at(-1);
    console.log(`${firstLine} <-> ${lastLine}`);
  });
}

/** Exercise 3
 *  copy the counterSream.txt file to a file named "counterStramCopy.txt"
 *
 *  1. find from and to path
 *  2. read the from file
 *  3. every chunk received write to "to" file
 */

// const filePathFrom = path.resolve(__dirname, "./counterStream.txt");
// const filePathTo = path.resolve(__dirname, "./counterStreamCopy1.txt");

// copy(filePathFrom, filePathTo);

function copy(fromPath, toPath) {
  const rs = fs.createReadStream(fromPath);
  const ws = fs.createWriteStream(toPath);

  rs.on("data", (chunk) => {
    ws.write(chunk);
  });

  rs.on("end", () => {
    ws.end();
  });

  // rs.pipe(ws); // built in copy between streams function
}
