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

  var sql = "CREATE TABLE bird_uploads (\
    u_id INT AUTO_INCREMENT,\
    u_photographer VARCHAR(255),\
    u_location VARCHAR(255),\
    u_date DATE,\
    u_desc VARCHAR(4095),\
    u_image VARCHAR(1023),\
    b_id INT,\
    PRIMARY KEY (u_id),\
    FOREIGN KEY (b_id) REFERENCES birds(b_id))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
 });
