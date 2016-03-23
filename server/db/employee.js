var mongoose = require('mongoose');
var employeeSchema = mongoose.Schema({
  name: { type: String, required: true },
  regions: [String]
});

module.exports = mongoose.model('employee', employeeSchema);
