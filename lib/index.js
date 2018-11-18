const minimist = require('minimist');
const fs = require('fs');
const path = require('path');

const argvs = minimist(process.argv.slice(2));

// console.log('argvs = ', argvs);
console.log('require add')

const subCommand = argvs._[0];


exports.default = addFile;



function addFile(argvs) {
  const fileName = argvs.fileName;
  const processPath = process.cwd();
  const filePath = path.join(processPath, fileName);
  const content = argvs.content;
  fs.writeFileSync(filePath, content);
}
//test-