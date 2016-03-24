var app = require('./app');
var db = require('./db');
var chalk = require('chalk');

db.connect()
  .then(function(){
    console.log(chalk.green('database connected'));
    app.listen(process.env.PORT, function(){
      console.log(chalk.green(`listening on ${process.env.PORT}`));
    });
  });
