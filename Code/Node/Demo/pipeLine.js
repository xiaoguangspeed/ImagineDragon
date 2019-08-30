const stream = require('stream')
const fs = require('fs')
const zlip = require('zlip')
const util = require('util')
const pipeline = util.promisify(stream.pipeline)

async function run() {
    await pipeline(
        fs.createReadStream('googlelogo.png'),
        zlip.createGzip(),
        fs.createWriteStream('out.tar.gz')
    )
    console.log('pipeline success')
}
run().catch(console.error)