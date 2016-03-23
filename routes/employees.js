var router = require('express').Router();
var models = require('../db').models;
var Employee = models.Employee;

module.exports = router;

router.get('/', function(req, res, next){
  return Employee.find()
    .then(function(employees){
      res.send(employees);
    });
});

router.post('/', function(req, res, next){
  return Employee.create(req.body)
    .then(function(employee){
      res.send(employee);
    }, next);
});

router.put('/:id', function(req, res, next){
  return Employee.findById(req.params.id)
    .then(function(employee){
      employee.name = req.body.name;
      employee.regions = req.body.regions;
      return employee.save();
    })
    .then(function(employee){
      res.send(employee);
    }, next);
});