var express=require('express');
var app=express();
var mysql=require('mysql');

<<<<<<< HEAD
app.set('views',__dirname + '/views');
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'letstry231',
  database : 'mydb'
  });
  connection.connect();


  //Return home page
// app.get('/',function(req,res){
//   res.render('termProject.html');
//   });
  //Extract the keyword.
  //Return the result depending on the keyword.
 // app.get('/search',function(req,res){
  //extract key using req.query.key
  //call MySQL Query.
  //form JSON response and return.
 // });

  app.get('/',function(req,res){
    res.render('termProject.html');
    });
    
    app.get('/search',function(req,res){
    connection.query('SELECT keyword from searchOption where keyword like "%'+req.query.key+'%"',
    function(err, rows, fields) {
    if (err) throw err;
    var data=[];
    for(i=0;i<rows.length;i++)
    {
    data.push(rows[i].first_name);
    }
    res.end(JSON.stringify(data));
    });
    });

var server=app.listen(8080,function(){
console.log("We have started our server on port 8080");
});




// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "letstry231",
//   database: "mydb"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// var http = require('http');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   fs.readFile('termProject.html', 'termProject.css', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);

//     if (req.method == 'POST'){
//       res.write(req.body.search);
      
//     }
//     res.end();
//   });
// }).listen(8080);



  // var sql = "CREATE TABLE searchOption (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(250) NOT NULL, url VARCHAR(500) NOT NULL, description VARCHAR(300), keyword VARCHAR(200), PRIMARY KEY(id))";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });

  // var sql = "INSERT INTO searchOption (id,title,url,keyword) VALUES ?";
  // var values = [
	// ['1','You Tube','https://www.youtube.com/','Youtube,youtube,you tube'],
	// ['2','CUNY Blackboard','https://ssologin.cuny.edu/cuny.html?resource_url=https%3A%2F%2Fbbhosted.cuny.edu%252F','CUNY Blackboard,Blackboard,CUNY'],
	// ['3','Gmail','https://accounts.google.com/ServiceLogin/signinchooser?service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin','gmail,signin'],
	// ['4','Queens College','https://www.qc.cuny.edu/Pages/home.aspx','queens college,qc,Queens College'],
	// ['5','Facebook','https://www.facebook.com/','facebook,login facebook'],
	// ['6','Amazon','https://www.amazon.com/','amazon,amazon sign up,Amazon'],
	// ['7','Zybook','https://learn.zybooks.com/signin','zybook,Zybook,Zy']
  // ];
  
  // con.query(sql,[values], function (err, result) {
  //   if (err) throw err;
  //   console.log("Number of records inserted: " + result.affectedRows);
  // });



  //create a server object:
  // http.createServer(function (req, res) {
  //   res.write('Hello World!'); //write a response to the client
  //   res.end(); //end the response
  // }).listen(8080);

  // http.createServer(
  //   //...
  //   if (req.method == 'POST'){
  //      console.log(req.body.yourScore)
  //   }
=======
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vulejai!!!96550",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO searchOption (id,title,url,keyword) VALUES ?";
  var values = [
	['1','You Tube','https://www.youtube.com/','Youtube,youtube,you tube'],
	['2','CUNY Blackboard','https://ssologin.cuny.edu/cuny.html?resource_url=https%3A%2F%2Fbbhosted.cuny.edu%252F','CUNY Blackboard,Blackboard,CUNY'],
	['3','Gmail','https://accounts.google.com/ServiceLogin/signinchooser?service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin','gmail,signin'],
	['4','Queens College','https://www.qc.cuny.edu/Pages/home.aspx','queens college,qc,Queens College'],
	['5','Facebook','https://www.facebook.com/','facebook,login facebook'],
	['6','Amazon','https://www.amazon.com/','amazon,amazon sign up,Amazon'],
	['7','Zybook','https://learn.zybooks.com/signin','zybook,Zybook,Zy']
  ];
  
  con.query(sql,[values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
>>>>>>> 131217d75c19f25cca7925c45154bf7c30035eb0
