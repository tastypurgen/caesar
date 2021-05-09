const commander = require("commander");
const { run } = require("./run/run");

const program = new commander.Command();

program
  .storeOptionsAsProperties(false)
  .passCommandToAction(false)
  .option("-s, --shift <number>", "a shift")
  .option("-i, --input <path>", "an input file")
  .option("-o, --output <path>", "an output file")
  .option("-a,--action <action>", "an action encode/decode")
  .parse(process.argv);

const param = program.opts();

run(param);
