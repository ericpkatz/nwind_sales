var app = require('../../server/app');
var expect = require('chai').expect;

var request = require('supertest-as-promised')(app);

describe('routes', function(){
  beforeEach(function(done){
    require('./seed')()
      .then(done.bind(null, null));
  
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
    });
  });
});
