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

  var sql = "CREATE TABLE categories (\
    c_id INT AUTO_INCREMENT,\
    c_name VARCHAR(255),\
    c_desc VARCHAR(1023),\
    c_thumb VARCHAR(1023),\
    c_image VARCHAR(1023),\
    PRIMARY KEY (c_id))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

 var sql = "INSERT INTO categories\
 (c_name, c_desc, c_thumb, c_image)\
 VALUES\
 ('Category_Name_1', 'Category_Description_1', 'Category_Thumb_1', './uploads/categories/image_1.png'),\
 ('Category_Name_2', 'Category_Description_2', 'Category_Thumb_2', './uploads/categories/image_2.png'),\
 ('Category_Name_3', 'Category_Description_3', 'Category_Thumb_3', './uploads/categories/image_3.png'),\
 ('Category_Name_4', 'Category_Description_4', 'Category_Thumb_4', './uploads/categories/image_4.png'),\
 ('Category_Name_5', 'Category_Description_5', 'Category_Thumb_5', './uploads/categories/image_5.png'),\
 ('Category_Name_6', 'Category_Description_6', 'Category_Thumb_6', './uploads/categories/image_6.png'),\
 ('Category_Name_7', 'Category_Description_7', 'Category_Thumb_7', './uploads/categories/image_7.png'),\
 ('Category_Name_8', 'Category_Description_8', 'Category_Thumb_8', './uploads/categories/image_8.png'),\
 ('Category_Name_9', 'Category_Description_9', 'Category_Thumb_9', './uploads/categories/image_9.png'),\
 ('Category_Name_10', 'Category_Description_10', 'Category_Thumb_10', './uploads/categories/image_10.png'),\
 ('Category_Name_11', 'Category_Description_11', 'Category_Thumb_11', './uploads/categories/image_11.png'),\
 ('Category_Name_12', 'Category_Description_12', 'Category_Thumb_12', './uploads/categories/image_12.png')";
 con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Data added");
  });
 });