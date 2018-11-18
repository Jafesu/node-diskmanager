const shell = require('shelljs');
const debug = require('debug')('app:DiskManager');
const chalk = require('chalk');
const path = require('path');
const smartctl = require('node-smartctl');

const disks = smartctl();

getSmart = () => {
  for(i = 0; i < disks.length; i++){
    console.log(disks[i].Disk);
    console.log(disks[i].Status);
  }
}
getSmart();
