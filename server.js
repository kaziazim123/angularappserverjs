var express = require("express");
var mysql = require("mysql");
// const db = require("../db");


var app = express();

app.get(
    "/" ,
    (request, response) => 
    {
        response.send("welcome home");
    }
);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get(
 "/emps" ,
 (request , response) =>
 {
     var connection = mysql.createConnection({
                                             host: "172.18.5.196",
                                             database: "Employee",
                                             user: "root",
                                             password: "root",
                                             port: 9099
                                             });

    connection.connect();
    connection.query(
        "select * from emp",
        (err,result)=>
        {
            if(err==null)
            {
                var data = JSON.stringify(result);
                response.send(data);
            }
            else
            {
                console.log("something is wrong");
            }

        }


    );                                
 }

);

app.listen(
    9898,
    ()=>
    {
        console.log("server is listening at port 9898");
    }

);