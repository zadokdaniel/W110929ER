const os = require("node:os");

function getCPUsLength() {
  return os.cpus().length;
}

function getRAMDetails() {
  const total = os.totalmem(),
    free = os.freemem();

  return {
    total,
    free,
    inUse: (total - free) / total,
  };
}

module.exports = {
  getCPUsLength,
  getRAMDetails,
};
