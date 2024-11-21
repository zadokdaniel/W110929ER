const byteSize = require("byte-size");
const chalk = require("chalk");
const cowsay = require("cowsay");

const { getCPUsLength, getRAMDetails } = require("./sysInfo");

showSystemInformation();

console.log(
  cowsay.think({
    text: chalk.bgBlueBright(`${(getRAMDetails().inUse * 100).toFixed(2)}%`),
  })
);

function showSystemInformation() {
  const ramDetails = getRAMDetails();

  const total = byteSize(ramDetails.total);
  const free = byteSize(ramDetails.free);

  console.log("Number of CPUs: \t", getCPUsLength());
  console.log(
    "Total RAM memory: \t",
    chalk.bgBlueBright(`${total.value}${total.unit}`)
  );
  console.log(
    "Free Ram memory: \t",
    chalk.bgRedBright(`${free.value}${free.unit}`)
  );
  console.log(
    "RAM in use (%): \t",
    chalk.bgGreen(`${(ramDetails.inUse * 100).toFixed(2)}%`)
  );
}
