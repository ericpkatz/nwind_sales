var db = require('../../db');
var models = db.models;
var Employee = models.Employee;

var expect = require('chai').expect;
describe('Employee', function(){
  it('exists', function(){
    expect(Employee).to.be.ok;
  });
});
