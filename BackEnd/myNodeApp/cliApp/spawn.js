// 如果想要编写跨平台的 spawn 命令，而又不想增加额外的开销的话，可以这样写
const process = require('process');
const { spawn } = require('child_process');

spawn('npm', {
  stdio: 'inherit',
  // 仅在当前运行环境为 Windows 时，才使用 shell
  shell: process.platform === 'win32'
});