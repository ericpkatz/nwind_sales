var mongoose = require('mongoose');
var employeeSchema = mongoose.Schema({
  name: String,
  regions: [String]
});

module.exports = mongoose.model('employee', employeeSchema);
