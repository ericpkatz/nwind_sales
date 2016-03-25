angular.module('app')
  .controller('SalesTeamCtrl', function($scope, Regions, SalesTeam, SalesPerson){
    function setNewEmployee(){
      $scope.newEmployee = new SalesPerson();
    }

    $scope.regions = Regions();
    setNewEmployee();

    $scope.createEmployee = function(employee){
      SalesTeam.save(employee)
        .then(function(employee){
          $scope.employees.unshift(employee);
          setNewEmployee();
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
