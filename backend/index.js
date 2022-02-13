var mysql = require('mysql2');
 const express = require('express')
 const app = express();
 const port = 3001
 const cors=require('cors');
const bodyParser=require('body-parser');

app.use(cors());
app.use(express.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "toor",
  database:"birdschannel"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


    // var sql = "SELECT * FROM birdsall";
    // con.query(sql, function (err, result, fields) {
    //   if (err) throw err;
    // console.log(result);
    // });

  app.post('/admin',(req,res)=>{
  const b_name = req.body.b_name;
  const b_cname = req.body.b_cname;
  const b_food = req.body.b_food;
  const b_prey = req.body.b_prey;
  const b_habitat = req.body.b_habitat;
  const b_desc = req.body.b_desc;
  const b_image = req.body.b_image;
  const b_categ = req.body.b_categ;

con.query(
  "INSERT INTO birds (b_name, b_cname, b_food, b_prey, b_habitat, b_desc, b_image, b_categ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
[b_name, b_cname, b_food, b_prey, b_habitat, b_desc, b_image, b_categ],
(err,result)=>{
  if(err)console.log(err);
  else{
    res.send("Values inserted");
  }
}
);
     
 
  });









  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })