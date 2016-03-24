angular.module('app')
  .factory('SalesPerson', function(){

    function SalesPerson(data){
      data = data || { name: '', regions: []};
      this.name = data.name;
      this.regions = data.regions;
      this._id = data._id;
    }

    SalesPerson.prototype.isValid = function(){
      return this.name.replace(/ /g, '').length > 0 && this.regions.length > 0;
    };

    SalesPerson.prototype.notWorking = function(){
      return this.regions.length === 0;
    };

    SalesPerson.prototype.fullSchedule = function(){
      return this.regions.length === 3;
    };

    SalesPerson.prototype.working = function(){
      return this.regions.length !== 0;
    };

    SalesPerson.prototype.isNew = function(){
      return !this._id; 
    };

    SalesPerson.prototype.regionIdx = function(region){
      return this.regions.indexOf(region);
    };

    SalesPerson.prototype.hasRegion = function(region){
      return this.regionIdx(region) !== -1;
    };


    SalesPerson.prototype.toggleRegion = function(region){
      var idx = this.regionIdx(region);
      if(idx === -1)
        this.regions.push(region);
      else
        this.regions.splice(idx, 1);
    };

    return SalesPerson;
  });
