const chalk = require('chalk')
const command = require('commander')
const path = require('path');
const fs = require('fs');


const packageJson  = require('./package.json');
let projectName;
let consoleOut = {};

const program = new command.Command(packageJson.name)
  .version("0.0.1")
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action(name => {
    projectName = name;
  })
  .parse(process.argv);

  consoleOut.root = path.resolve();  //解析生成一个绝对路径
  consoleOut.originalDir = process.cwd();
  
    // require
    // console.log("require cache:",require.cache);
  consoleOut.chalk = require.resolve('chalk');
  consoleOut.relativePath = path.resolve(__dirname,"../..");//当前文件夹的父文件夹的父文件夹

  const JsonObj = {
    name: 'appName',
    version: '0.1.0',
    private: true,
  };

  fs.writeFileSync(
      path.join(consoleOut.root+'/output.json'),
      JSON.stringify(JsonObj,null,2)
  )


  

  // 输出consoleOut的keys
  Object.keys(consoleOut).forEach(ele => {
    console.log(chalk.red(ele),consoleOut[ele])
  });