let semver = require('semver')
let chalk = require('chalk')
let pkgVer = require('../package.json').engines
let curVer = {}
// 获取node和npm的version
curVer.node = semver.clean(process.version)

function exec(cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

curVer.npm = exec('npm --version')


// 重复代码，需要重构
module.exports = () => {
  let warnFlag = false
  if(!semver.satisfies(curVer.node, pkgVer.node)){
    warnFlag = true
    console.log(`your node version is ${chalk.red(curVer.node)}, please update to ${chalk.green(pkgVer.node)}`) 
  }
  console.log()
  if(!semver.satisfies(curVer.npm, pkgVer.npm)){
    warnFlag = true
    console.log(`your npm version is ${chalk.red(curVer.npm)}, please update to ${chalk.green(pkgVer.npm)}`) 
  }
  console.log()
  warnFlag && process.exit(1)
}