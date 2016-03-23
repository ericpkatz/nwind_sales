var db = require('../../server/db');
var seed = require('./seed');
var models = db.models;
var Employee = models.Employee;

var expect = require('chai').expect;
describe('Employee', function(){
  beforeEach(function(done){
    seed()
      .then(function(){
        done();
      }, done);
  });
  it('exists', function(){
    expect(Employee).to.be.ok;
  });

  it('there are three employees', function(done){
    Employee.find()
      .then(function(employees){
        expect(employees.length).to.equal(3);
        done();
      });
  });

  describe('Moe', function(){
    it('he has three regions, North, South, West', function(done){
      Employee.findOne({ name: 'Moe'})
        .then(function(moe){
          expect(moe.regions).to.eql(['North', 'South', 'West']);
          done();
        })
        .catch(function(err){
          done(err);
        });
    });
  });
});
