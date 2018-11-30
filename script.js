/**
 * Created by shiyunjie on 2018/11/25.
 */
var core = require('../shiyj-node-command-line/scripts/dev');
var commands = require('./index')

if(core.saveCommands) {
  console.log('core',core,commands)
  core.saveCommands('shiyj-node-command-line-add',commands)
}