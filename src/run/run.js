const readline = require("readline");
const fs = require("fs");
const { caesar } = require("../caesar/caesar");
const { validation } = require("../validation/validation");

const run = (param) => {
  if (param.shift === undefined || Number.isNaN(Number(param.shift))) {
    console.error("Missing --shift option");
    process.exit(9);
  }
  if (param.action === undefined) {
    console.error("Missing --action option");
    process.exit(9);
  }
  if (param.action !== "encode" && param.action !== "decode") {
    console.error("action parameter must contain decode or encode");
    process.exit(9);
  }

  if (param.input === undefined) {
    let rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(`Enter text here: `, function (answer) {
      if (param.output === undefined)
        console.log(caesar(answer, param.shift, param.action));
      else {
        fs.appendFileSync(
          validation(param.output),
          caesar(answer, param.shift, param.action),
          "utf8"
        );
      }
      rl.close();
    });
  } else {
    let content = fs.readFileSync(validation(param.input), "utf8");
    if (param.output === undefined)
      console.log(caesar(content, param.shift, param.action));
    else {
      fs.appendFileSync(
        validation(param.output),
        caesar(content, param.shift, param.action),
        "utf8"
      );
    }
  }
};

module.exports = { run };
