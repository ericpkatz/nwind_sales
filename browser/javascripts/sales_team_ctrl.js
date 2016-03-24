angular.module('app')
  .controller('SalesTeamCtrl', function($scope, SalesTeam){

    $scope.newEmployee = SalesTeam.newEmployee();

    $scope.createEmployee = function(employee){
      SalesTeam.insert(employee)
        .then(function(employee){
          $scope.employees.unshift(employee);
          $scope.newEmployee = SalesTeam.newEmployee();
        });
    };

    $scope.remove = function(employee, index){
      SalesTeam.remove(employee)
        .then(function(){
          $scope.employees.splice(index, 1);
        });
    };

    $scope.toggleSelection = function(item, employee){
      item.selected = !item.selected;
      SalesTeam.update(employee)
        .then(function(){
        });
    };

    SalesTeam.fetch()
      .then(function(employees){
        $scope.employees = employees;
      });
  
  });
