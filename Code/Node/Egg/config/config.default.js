/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1572321212763_3713';

  // add your middleware config here
  config.middleware = ['robot'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    news: {
      pageSize: 5,
      serverUrl: 'https://api.coindesk.com/v1/bpi/currentprice.json'
    },
    sequelize : {
      dialect: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      database: 'blockNext',
    }
  };
// robot's configurations
exports.robot = {
  ua: [
    /Baiduspider/i,
  ]
};
  return {
    ...config,
    ...userConfig,
  };
};
