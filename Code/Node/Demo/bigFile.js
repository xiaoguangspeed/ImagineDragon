const fs = require('fs')
const bigFile = fs.createWriteStream('./big.file')
for(let i=0;i<1e6; i++) {
  bigFile.write(`'You're just too good to be true
  I can't keep my eyes off of you
  You'd feel like heaven to touch
  I wanna hold you so much
  At long last love has arrived
  And I thank God I'm alive
  You're just too good to be true
  Can't take my eyes off youPardon the way that I stare
  There's nothing else to compare
  The sight of you leaves me weak
  There are no words left to speak
  But if you feel like I feel
  Please let me know that is real
  You're just too good to be true'
  I love you, baby
  And if it's quite alright
  I need you, baby
  To warm the lonely nights
  I love you, baby
  Trust in me when I say
  Oh, pretty baby
  Don't bring me down I pray
  Oh, pretty baby
  Now that I've found you stay
  And let me love you, baby
  Let me love you `)
}
bigFile.end()