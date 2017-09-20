var connection = require('./connection.js');

var orm = {
  selectAll: function(){
    return new Promise (
      function(resolve, reject){
        connection.query('select * from burgers', function(err, data){
          resolve(data);
        });
      }
    );
  },

  insertOne: function(burger){
    return new Promise (
      function(resolve, reject){
        connection.query('insert into burgers (burger_name) values (?)',[burger],
        function(err, data){
            resolve(data);
        }
      );
      }
    );
  },

  updateOne: function(burger){
    return new Promise (
      function(resolve, reject){
        connection.query('update burgers set devoured = ? where id = ?', [true, burger], function(err, data){
          if (err) throw err;
          resolve(data);
        });
      }
    );
  }
  // updateOne: function(update) {
  //   console.log("Update One");
  //   console.log("select all");
  //   connection.query('update burgers set burger = ? where id = ?',update, function(err, data){
  //     if(err) throw err;
  //     console.log(data);
  //   });
  // }

};



module.exports = orm;
