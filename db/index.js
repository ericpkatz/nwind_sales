var mongoose = require('mongoose');
var Promise = require('bluebird');

var Employee = require('./employee');

var _conn;
module.exports = {
  connect: function(){
    if(_conn)
      return _conn;
    _conn = new Promise(function(resolve, reject){
      if(!process.env.CONN)
        reject(new Error('set up CONN variable for mongoose'));
      mongoose.connect(process.env.CONN, function(err){
        if(err)
          return reject(err);
        resolve(mongoose.connection);
      });
    });
    return _conn;
  
  },
  models: {
    Employee: Employee
  }
};
