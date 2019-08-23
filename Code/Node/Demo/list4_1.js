const util = require('util')
const events = require('events')

util.inherits(MusicPlayer, events.EventEmitter)
function MusicPlayer() {
  this.playing = false;
  events.EventEmitter.call(this)
}
var musicPlayer = new MusicPlayer()
musicPlayer.on('play', (track)=> {
  this.playing = true;

})

console.log(MusicPlayer.super_)