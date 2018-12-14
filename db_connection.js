var mysql = require('mysql');

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
