/**
 * Created by shiyunjie on 2018/11/18.
 */
var fs = require('fs-extra');
var path = require('path');
var cwd = process.cwd();

module.exports = addFile

function addFile(argv) {
  var fileName = argv.file || 'file.md';
  var content = argv.content || '---';
  var pathName = path.join(cwd, fileName);

  console.log('开始添加文件：');
  fs.outputFile(pathName, content, function (err) {
    if (err) {
      return console.error('错误！', err)
    }
    console.log('成功添加文件!')
  })
}