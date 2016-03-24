describe('regions', function(){
  beforeEach(module('app'));
  var Regions;
  beforeEach(inject(function(_Regions_){
    Regions = _Regions_;
  }));
  it('returns correct data', function(){
    expect(Regions()).to.eql(['North', 'South', 'East', 'West']);
  });
});
