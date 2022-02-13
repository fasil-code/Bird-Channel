var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Zargar@123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var sql = "CREATE DATABASE birdchannel";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
