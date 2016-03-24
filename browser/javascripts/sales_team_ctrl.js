angular.module('app')
  .factory('SalesTeam', function($http){
    return {
      fetch: function(){
        return $http.get('/api/employees')
          .then(function(result){
            return result.data;
          });
      },
      update: function(employee){
        return $http.put('/api/employees/' + employee._id, employee) 
          .then(function(){

          });
      
      }
    };
  });

angular.module('app')
  .controller('SalesTeamCtrl', function($scope, SalesTeam){
    function regions(){
      var regions = [
        'North',
        'South',
        'East',
        'West'
      ];
      return regions;
    }

    $scope.toggleSelection = function(item, employee){
      item.selected = !item.selected;
      employee.regions = employee.allRegions.reduce(function(memo, item){
        if(item.selected)
          memo.push(item.region);
        return memo;
      }, []);

      SalesTeam.update(employee)
        .then(function(){
        
        });

    
    };

    SalesTeam.fetch()
      .then(function(employees){
        employees.forEach(function(employee){
          //loop over regions and set a selected
          employee.allRegions = regions().reduce(function(memo, region){
            memo.push({ region: region, selected: employee.regions.indexOf(region) !== -1 });
            return memo;
          }, []); 
        });
        $scope.employees = employees;
      });
  
  });
