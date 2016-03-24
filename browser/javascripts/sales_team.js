angular.module('app')
  .factory('SalesTeam', function($http){
    function regions(){
      return [
        'North',
        'South',
        'East',
        'West'
      ];
    }

    return {
      getRegions: function(employee){
        return employee.allRegions.reduce(function(memo, item){
          if(item.selected)
            memo.push(item.region);
          return memo;
        }, []);
      },
      newEmployee: function(){
        return this.transform({
          name: '',
          regions: []
        });
      },
      transform: function(employee){
          employee.allRegions = regions().reduce(function(memo, region){
            memo.push({ region: region, selected: employee.regions.indexOf(region) != -1 });
            return memo;
          }, []);
          return employee;
      },
      fetch: function(){
        var that = this;
        return $http.get('/api/employees')
          .then(function(result){
            return result.data;
          })
          .then(function(employees){
            return employees.map(function(employee){
              return that.transform(employee);
            });
          });
      },
      update: function(employee){
        var that = this;
        employee.regions = this.getRegions(employee);
        console.log(employee.regions);
        return $http.put('/api/employees/' + employee._id, employee) 
          .then(function(result){
            return that.transform(result.data);
          });
      },
      insert: function(employee){
        employee.regions = this.getRegions(employee);
        var that = this;
        return $http.post('/api/employees/', employee) 
          .then(function(result){
            return that.transform(result.data);
          });
      },
      remove: function(employee){
        return $http.delete('/api/employees/' + employee._id); 
      }
    };
  });
