angular.module('app')
  .controller('SalesTeamCtrl', function($scope, Regions, SalesTeam, SalesPerson){
    $scope.regions = Regions();
    $scope.newEmployee = new SalesPerson();

    $scope.createEmployee = function(employee){
      SalesTeam.save(employee)
        .then(function(employee){
          $scope.employees.unshift(employee);
          $scope.newEmployee = new SalesPerson(); 
        });
    };

    $scope.remove = function(employee, index){
      SalesTeam.remove(employee)
        .then(function(){
          $scope.employees.splice(index, 1);
        });
    };

    $scope.toggleSelection = function(employee, region){
      employee.toggleRegion(region);
      SalesTeam.save(employee)
        .then(function(){
        });
    };

    SalesTeam.fetch()
      .then(function(employees){
        $scope.employees = employees;
      });
  
  });
