'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  sequelize: {
    enbale: true,
    package: 'egg-sequelize'
  }
};
