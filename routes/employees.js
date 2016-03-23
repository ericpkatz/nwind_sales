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
