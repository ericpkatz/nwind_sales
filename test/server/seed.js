var db = require('../../server/db');
var Employee = db.models.Employee;

module.exports = function(){
  return db.connect()
    .then(function(){
      return Employee.remove();
    })
    .then(function(){
      return Employee.create([
          { name: 'Moe', regions: ['North', 'South', 'West'] },
          { name: 'Larry' },
          { name: 'Curly' }
      ]);
    });
};
