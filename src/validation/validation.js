const path = require("path");
const fs = require("fs");

const validation = (strFile) => {
  let str = String(strFile).trim();

  let result = path.resolve(str);

  try {
    if (fs.lstatSync(result).isFile()) return result;
  } catch (err) {
    console.error(`File ${strFile} is missing`);
    process.exit(9);
  }
};
module.exports = { validation };
