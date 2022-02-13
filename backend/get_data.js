var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Zargar@123",
  database: "birdchannel"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var sql = "SELECT * FROM categories";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
