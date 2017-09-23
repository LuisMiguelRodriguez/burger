var orm = require('../config/orm.js');



 var burger = {
   getBurgers: function(cb){
     orm.selectAll('burgers', function(res){
       cb(res);
     });
   },
   addBurger: function(val , cb){
     orm.insertOne('burgers', 'burger_name', val , function(res){
      cb(res);
     });

   },
   eatBurger: function(val, cb){
     orm.updateOne('burgers', 'devoured', val , function(res){
       cb(res);
     })
   }
 };



module.exports = burger;
