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
      },
      insert: function(employee){
        return $http.post('/api/employees/', employee) 
          .then(function(result){
            return result.data;
          });
      },
      remove: function(employee){
        console.log(employee);
        return $http.delete('/api/employees/' + employee._id) 
          .then(function(result){
            return result.data;
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

    $scope.newEmployee = {
      name: ''
    };

    $scope.newEmployee.allRegions = regions().reduce(function(memo, region){
      memo.push({ region: region, selected: false });
      return memo;
    }, []);

    $scope.createEmployee = function(employee){
      employee.regions = employee.allRegions.reduce(function(memo, item){
        if(item.selected)
          memo.push(item.region);
        return memo;
      }, []);
      SalesTeam.insert(employee)
        .then(function(employee){
          employee.allRegions = regions().reduce(function(memo, region){
            memo.push({ region: region, selected: employee.regions.indexOf(region) != -1 });
            return memo;
          }, []);
          $scope.employees.unshift(employee);
          $scope.newEmployee = {
            name: ''
          };

          $scope.newEmployee.allRegions = regions().reduce(function(memo, region){
            memo.push({ region: region, selected: false });
            return memo;
          }, []);
              });
    }

    $scope.remove = function(employee, index){
      SalesTeam.remove(employee)
        .then(function(){
          $scope.employees.splice(index, 1);
        });
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
          employee.allRegions = regions().reduce(function(memo, region){
            memo.push({ region: region, selected: employee.regions.indexOf(region) !== -1 });
            return memo;
          }, []); 
        });
        $scope.employees = employees;
      });
  
  });
