var express = require('express');
var cors = require('cors');
var path=require('path');
var bodyParser = require("body-parser");
var app = express();
var http=require('http');
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.static('./views/pages'))
//app.use(express.static('./app'));
var bodyParser=require('body-parser');
var fs=require('fs');
var port = process.env.PORT || 3000 ;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/views/pages/Sample.html'))
})

app.get('/JobApplication',function(req,res){
        res.sendFile(path.join(__dirname+'/views/pages/JobApplication.html'))
})
app.get('/AdminRegister',function(req,res){
    res.sendFile(path.join(__dirname+'/views/pages/AdminRegister.html'))//Admin register
})
app.get('/AdminLogin',function(req,res){
    res.sendFile(path.join(__dirname+'/views/pages/AdminLogin.html'))
})
app.get('/HRNewJobPost',function(req,res){
   res.sendFile(path.join(__dirname+'/views/pages/HRNewJobPost.html'))//new job
})
app.get('/UpdateStatus',function(req,res){
    res.sendFile(path.join(__dirname+'/views/pages/UpdateStatus.html'))//Update status
})
app.get('/Enquiries',function(req,res){
    res.sendfile(path.join(__dirname+'/views/pages/Enquiries.html'))//Enquiries
})
app.get('/ForgotPassword', function(req,res){
    res.sendFile(path.join(__dirname+'/views/pages/ForgotPassword.html'))//Forgot password
})
app.get('/ForgotPasswordSet',function(req,res){
    res.sendFile(path.join(__dirname+'/views/pages/ForgotPasswordSet.html'))//ForgotPasswordSet
})
app.get('/ResetPassword', function(req,res){
    res.sendfile(path.join(__dirname+'/views/pages/ResetPassword.html'))//reset password
})
app.get('/ResetPasswordSet',function(req,res){
    res.sendFile(path.join(__dirname+'/views/pages/ResetPasswordSet.html'))//Reset password set
})
app.get('/AdminHome',function(req,res){
    res.sendFile(path.join(__dirname+'/views/pages/AdminHome.html'))
})
app.get('/CandidateProfile',function(req,res){
    res.sendFile(path.join(__dirname+'/views/pages/CandidateProfile.html'))
})
app.get('/AllJobs',function(req,res){
    res.sendFile(path.join(__dirname+'/views/pages/AllJobs.html'))
})
app.get('/GetCandidatejobs',function(req,res){
    res.sendFile(path.join(__dirname+'/views/pages/GetCandidatejobs.html'))
})
app.get('/GetJobData',function(req,res){
    res.sendFile(path.join(__dirname+'/views/pages/GetJobData.html'))
})

var Users = require('./views/pages/Users');
{
app.use('/users',Users);
}
 var AdminRegister=require('./views/pages/AdminRegister');
{
 app.use('/AdminRegister', AdminRegister);
}
var AdminLogin=require('./views/pages/AdminLogin');{
    app.use('/AdminLogin',AdminLogin)
}
var CandidateProfile=require('./views/pages/CandidateProfile');{
    app.use('/CandidateProfile',CandidateProfile)
}
var HRNewJobPost=require('./views/pages/HRNewJobPost');{
    app.use('/HRNewJobPost',HRNewJobPost)
}
var ActivePositions= require('./views/pages/ActivePositions');{
app.use('/ActivePositions',ActivePositions)
}
var UpdateStatus=require('./views/pages/UpdateStatus');{
    app.use('/UpdateStatus',UpdateStatus);
}
var AllJobs=require('./views/pages/AllJobs');
{
    app.use('/AllJobs',AllJobs);
}
var Enquiries=require('./views/pages/Enquiries');{
    app.use('/Enquiries',Enquiries);
}

var ForgotPassword=require('./views/pages/ForgotPassword');
{
app.use('/ForgotPassword',ForgotPassword);
}
var ForgotPasswordSet= require('./views/pages/ForgotPasswordSet');{
app.use('/ForgotPasswordSet',ForgotPasswordSet)
}
var ResetPassword=require('./views/pages/ResetPassword');{
    app.use('/ResetPassword',ResetPassword)
}
var ResetPasswordSet=require('./views/pages/ResetPasswordSet');{
    app.use('/ResetPasswordSet',ResetPasswordSet)
}
var SearchJob=require('./views/pages/SearchJob');{
    app.use('/SearchJob',SearchJob)
}
var ViewEnquiries=require('./views/pages/ViewEnquiries');{
    app.use('/ViewEnquiries',ViewEnquiries)
}
var GetCandidateJobs=require('./views/pages/GetCandidateJobs');{
app.use('/GetCandidateJobs',GetCandidateJobs)
}

app.listen(port,function(){
    console.log("Server is running on port: "+port);
})





