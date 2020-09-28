const execute = require('./utils/executer');
const promiser = require('./utils/promiser');
const command = require('./linux/rescan/command.js');

const rescanWifi = config =>
  execute(command(config));

module.exports = promiser(rescanWifi);
