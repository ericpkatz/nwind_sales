angular.module('app')
  .factory('Regions', function(){
    return function(){
      return [
        'North',
        'South',
        'East',
        'West'
      ];
    };
  });
