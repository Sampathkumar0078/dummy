var express = require('express');
var users = express.Router();
var port = process.env.PORT || 3000;
var database=require('../pages/Database/DBConnections');
var multer=require('multer');
process.env.secretkey='zyclyx';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,'./uploads/Images')
    },
    filename: function (req, file, cb) {
        var file=file.originalname;
      cb(null,file )
    }
  })
  var appData={
    "error":1,
    "data":""
}
   
  var upload = multer({ storage: storage })

  users.post('/UpdateStatus',upload.single(''),function(req,res){
     var title= req.body.title;
  console.log(title+' title')
     database.connection.getConnection(function(err,connection){
         if(err){
             console.log(err);
             res.send('error occured while connecting database');
         }
         else{
             connection.query('update jobs set status=? where jobtitle=?',['close',title],function(err,data){
                 if(err){
                     console.log(err)
                     res.send('problem in database');
                 }
                 else{
                     res.send('Done');
                 }
             })
         }
     })

  })
  module.exports=users;