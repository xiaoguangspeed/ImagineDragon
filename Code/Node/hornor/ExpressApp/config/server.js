const parsedArgs = require('../utils/commondOptions')

const { env } = process

module.exports = {
  //service port 
  port: parsedArgs.port || env.port || 9200,
  // mongodb address
  database: parsedArgs.database || env.database || 'mongodb://localhost:27017/fishtalk'
}