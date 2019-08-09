const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function lsExample() {
  const { stdout, stderr } = await exec('ls');
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}
lsExample();

const execFile = require('child_process').execFile
execFile('node',['--version'], (error, stdout, stderr) => {
  if(error){
    throw error
  }
  console.log(stdout)
})
