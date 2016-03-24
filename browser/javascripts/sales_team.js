angular.module('app')
  .factory('SalesTeam', function($http, SalesPerson){

    return {
      fetch: function(){
        return $http.get('/api/employees')
          .then(function(result){
            return result.data.map(function(employee){
              return new SalesPerson(employee); 
            });
          });
      },
      save: function(employee){
        if(employee.isNew())
          return this.insert(employee);
        return this.update(employee);
      },
      update: function(employee){
        return $http.put('/api/employees/' + employee._id, employee) 
          .then(function(result){
            return new SalesPerson(result.data); 
          });
      },
      insert: function(employee){
        return $http.post('/api/employees/', employee) 
          .then(function(result){
            return new SalesPerson(result.data); 
          });
      },
      remove: function(employee){
        return $http.delete('/api/employees/' + employee._id); 
      }
    };
  });
