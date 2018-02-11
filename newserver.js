const ejsLint = require('ejs-lint');
var express = require('express');
var app = express();
var url = express('url');
var ejs = require('ejs');
var fs = require('fs');// maybe it is no need in it
var mysql = require('mysql');
var  bodyParser =require("body-parser");
var timeCorent= Date.now();
    //Макс  подключить не забудь
    //Саттические данные(скрипты) 8))))
    app.use(express.static('сss/css'));
  
var urlParser = bodyParser.urlencoded({ extended: true});
var jsonParser = bodyParser.json();
    app.set('view engine', 'ejs');//torning on  the ejs  modul  -  it make`s tamplate working 
 
     app.get('/', function(req, res){
          res.render('pages/index',{
         pageTitel: "Movei List",selectOptions:["title","popularity", "release_date"], time:timeCorent
       });
     });
    app.post('/addtomylist', jsonParser, function(req, res){
       console.log("req.query = "+ req.query );
       for(var key in req.query){
           console.log("req.query = "+ req.query[key] );
       }
       console.log("req.query = "+req.body.moveiId );
    for(var key in req.body){
           console.log("req.query = "+ req.body[key] );
       }
    /*res.render('partials/new_in_list',{
         moveiName: req.body
       });
       console.log("newArr"+req.body);*/
   //    fs.appendFileSync('userslist.json','{"id":"'+req.body+'",},');
     });
         
   
//ejs
app.listen(8080);
console.log('Server is ON');
