describe('SalesPerson', function(){
  beforeEach(module('app'));
  var SalesPerson;

  beforeEach(inject(function(_SalesPerson_){
    SalesPerson = _SalesPerson_;
  }));

  it('exists', function(){
    expect(SalesPerson).to.be.ok;
  });

  describe('a new sales person', function(){
    var salesPerson;
    beforeEach(function(){
      salesPerson = new SalesPerson();
    });

    it('is new', function(){
      expect(salesPerson.isNew()).to.equal(true);
    });

    it('is not working', function(){
      expect(salesPerson.notWorking()).to.equal(true);
    });

    it('working is false', function(){
      expect(salesPerson.working()).to.equal(false);
    });

    it('fullSchedule() is false', function(){
      expect(salesPerson.fullSchedule()).to.equal(false);
    });
  });
});
