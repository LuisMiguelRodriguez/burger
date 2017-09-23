var express = require('express');
var burger = require('../models/burger.js');
var orm = require('../config/orm.js');
var router = express.Router();
var path = require('path');


router.route('/')
  .get(function(req, res){

    burger.getBurgers(function(data){

      res.render("index", {burger: data});
    });

    // var data = orm.selectAll()
    //   .then(
    //     function(data){
    //       res.render("index", {burger:data});
    //     }
    //   );
  })
  .post(function(req, res){
    // console.log("Inside of post " + req.body.burger);
    // var data = orm.insertOne(req.body.burger);
    burger.addBurger(req.body.burger, function(){

      res.redirect("/");
    });

  })
  .put(function(req,res){
    // var data = orm.updateOne(req.body.id)
    //   .then(
    //     function(data){
    //       res.redirect('/');
    //     }
    //   )
    burger.eatBurger(req.body.id, function(){
      res.redirect('/');
    });
  });

module.exports = router;
