var orm = require('../config/orm.js');

module.exports = function (input){

  orm.insertOne();

  orm.selectAll();

  orm.updateOne();

};
