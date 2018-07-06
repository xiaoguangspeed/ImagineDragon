const chalk = require('chalk')
const command = require('commander')
const path = require('path');
const fs = require('fs');


const packageJson  = require('./package.json');
let projectName;

const program = new command.Command(packageJson.name)
  .version("0.0.1")
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action(name => {
    projectName = name;
  })
  .parse(process.argv);

  var root = path.resolve();  //解析生成一个绝对路径
  const JsonObj = {
    name: 'appName',
    version: '0.1.0',
    private: true,
  };

  fs.writeFileSync(
      path.join(root+'/output.json'),
      JSON.stringify(JsonObj,null,2)
  )
  console.log(root)

  const originalDir = process.cwd();

  // require
  // console.log("require cache:",require.cache);
  console.log('chalk:',require.resolve('chalk'));

  var eles = [1,2,3].map(function(ele,index){
    return ele+1;
  })
  console.log(eles)