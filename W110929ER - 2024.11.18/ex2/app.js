const os = require("node:os"); // core module, from documentation
const cowsay = require("cowsay"); // download module, using npm install and from node_modules directory
const aModule = require("./aModule"); // custom module, using files which are part of the package and written by the package developers

console.log(os.cpus());
console.log(
  cowsay.think({
    text: "hello",
  })
);
console.log(aModule.sayHi());
console.log(aModule.sayBye());
