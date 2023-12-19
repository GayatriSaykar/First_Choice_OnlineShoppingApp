var exp=require('express');
var cors=require("cors");
var mysql=require("mysql2");
var bp=require("body-parser");

var app=exp();

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"First_Choice"
})

app.use(cors());
app.use(bp.json());

con.connect(function(err){
    if(!err)
    {
        console.log("DB Connected");
    }
    else
    {
        console.log("DB NOT Connected");
    }
})

app.listen(9000,function(req,res){
    console.log("server connected at 9000");
})

app.get("/login",function(req,res){
    console.log("Request Received");
    con.query("select * from customer",function(err,result){

        if(!err)
        {
            console.log(result.length);
            res.json(result);
        }
})   
})

app.all("*",function(req,res){
    res.send("Wrong url");
})



