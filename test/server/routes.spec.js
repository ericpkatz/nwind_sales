var app = require('../../server/app');
var Employee = require('../../server/db').models.Employee;
var expect = require('chai').expect;

var request = require('supertest-as-promised')(app);

describe('routes', function(){
  beforeEach(function(done){
    require('./seed')()
      .then(done.bind(null, null));
  
  });
  describe('/', function(){
    it('has the title NWind Sales Team', function(){
      return request.get('/')
        .expect(200)
        .then(function(res){
          expect(res.text).to.contain('NWind Sales Team');
        
        });
    });
  });
  describe('/api', function(){
    describe('/api/employees', function(){
      describe('get /api/employees', function(){
        it('returns three employees', function(){
          return request.get('/api/employees')
            .expect(200);
        });
      
      });

      describe('post /api/employees', function(){
        it('can insert an employee', function(){
          return request.post('/api/employees')
            .send({ name: 'Shep'})
            .expect(200)
            .then(function(res){
              expect(res.body.name).to.equal('Shep');
            });
        });
      });

      describe('delete /api/employees/:id', function(){
        var moe;
        beforeEach(function(done){
          Employee.findOne({ name: 'Moe'})
            .then(function(_moe){
              moe = _moe;
              done();
            });
        });

        it('can delete employee', function(){

          return request.delete(`/api/employees/${moe.id}`)
            .expect(200)
            .then(function(res){
            });
        });
      });

      describe('put /api/employees/:id', function(){
        var moe;
        beforeEach(function(done){
          Employee.findOne({ name: 'Moe'})
            .then(function(_moe){
              moe = _moe;
              done();
            });
        });

        it('can update an employee', function(){

          return request.put(`/api/employees/${moe.id}`)
            .send({ name: 'moo', regions: ['South']})
            .expect(200)
            .then(function(res){
              expect(res.body.name).to.equal('moo');
              expect(res.body.regions).to.eql(['South']);
            });
        });
      });

    });
  });
});
