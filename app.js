const shell = require('shelljs');
const debug = require('debug')('DiskManager');
const chalk = require('chalk');
const path = require('path');

shell.exec('apt install smartmontools -y', function(code, stdout, stderr) {
    console.log('Exit code:', code);
    console.log('Program output:', stdout);
    console.log('Program stderr:', stderr);
  });