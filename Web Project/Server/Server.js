var exp=require('express')
var mysql=require('mysql2')
var bp=require('body-parser');
var cor=require('cors')

var con=mysql.createConnection({
    host:"localhost",
	user:"root",
	password:"abcdef",
	database:"first_choice"
});

var app=exp();
app.use(cor());
app.use(bp.json());

con.connect(function(err){
	if(!err)
		console.log("connected");
	else
		console.log("con failed");
})

app.listen(9000, function(){
	console.log("exp - REST server - 9000");
})

// app.post('/login',function(req,res)
// {
// 	var email=req.body.cust_email;
// 	var password=req.body.cust_password;
// 	var query="select * from customer where cust_email = '"+email+"' and cust_password ='" +password +"'";
// 	console.log(query);
// 	con.query(query,function(err,result){
// 		if(!err)
// 		{
// 			if(result.length>0)
// 			{
// 				res.send("login successful");
// 			}
// 			else
// 				res.send("incorrect password")
// 		}
// 		else{
// 			console.log(err.toString());
// 			res.send("failure")
// 		}
// 		});
// })

app.post("/login",function(req,res){
    var cust_email=req.body.cust_email;
   var cust_password=req.body.cust_password;
    var data=[cust_email,cust_password];
    console.log("Request Received");
   // console.log(cust_email+" "+cust_password);
    console.log(cust_email+" "+cust_password);
    var query="select * from customer where cust_email= ? and cust_password=?";
    con.query(query,[cust_email, cust_password],function(err,data){

        if(!err)
        {
            if(data.length>0 && data[0].cust_email==cust_email && data[0].cust_password==cust_password)
            {
                console.log(data);
                res.send("Login Successfully!!!");
            }
            else
            {
                res.send("Login Failed");
            }
        }
})  
})

app.post('/CustInsert',function(req,res){
    var name=req.body.cust_name;
    var contact=req.body.contact_num;
    var email=req.body.cust_email;
    var address=req.body.cust_address;
    var password=req.body.cust_password;
    
	
    var query="insert into customer (cust_name,contact_num,cust_email,cust_address,cust_password) values(?,?,?,?,?)";	
    con.query(query, [name,contact,email,address,password],function(err) {
	if(!err)
	{   res.send("success")
	}
    else{
		console.log(err.toString());
        res.send("failure")
    }
    });
})

app.put("/edit",function(req,res){
    var cust_password=req.body.cust_password;
    var cust_email=req.body.cust_email;
    console.log("Request Received");
    var query="update customer set cust_password=? where cust_email=?";
    con.query(query,[cust_password,cust_email],function(err,result){
        if(!err){
            if(result.affectedRows >0){
                res.send("Password updated successfully!!!")
            }else{
                res.send("Invalid email") 
            }
        }
        else{
            console.error('Error:',err);
            res.status(500).send('Internal server error');
        }
    })
 })