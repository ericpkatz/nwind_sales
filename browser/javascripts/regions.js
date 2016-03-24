angular.module('app')
  .factory('regions', function(){
    return function(){
      return [
        'North',
        'South',
        'East',
        'West'
      ];
    };
  });
