angular.module('app')
  .factory('SalesPerson', function($http){
    function SalesPerson(data){
      data = data || { name: '', regions: []};
      this.name = data.name;
      this.setRegionSelector(this.regions);
    }

    SalesPerson.prototype.setRegionSelector = function(regions){
    
    };

    SalesPerson.prototype.getRegions = function(){
    
    };

    SalesPerson.prototype.toggleRegion = function(item){
      item.selected = !item.selected;
    };

    return SalesPerson;
  });
