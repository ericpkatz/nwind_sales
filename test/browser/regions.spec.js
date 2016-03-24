describe('regions', function(){
  beforeEach(module('app'));
  var regions;
  beforeEach(inject(function(_regions_){
    regions = _regions_;
  }));
  it('returns correct data', function(){
    expect(regions()).to.eql(['North', 'South', 'East', 'West']);
  });
});
