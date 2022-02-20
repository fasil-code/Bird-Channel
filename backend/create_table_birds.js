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

  var sql = "CREATE TABLE birds (\
    b_id INT AUTO_INCREMENT,\
    b_name VARCHAR(255),\
    b_cname VARCHAR(255),\
    b_food VARCHAR(255),\
    b_prey VARCHAR(255),\
    b_habitat VARCHAR(255),\
    b_desc VARCHAR(1023),\
    b_image VARCHAR(1023),\
    b_audio VARCHAR(1023),\
    b_categ INT,\
    PRIMARY KEY (b_id),\
    FOREIGN KEY (b_categ) REFERENCES categories(c_id))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
 });
