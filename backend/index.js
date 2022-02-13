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
  password: "Zargar@123",
  database:"birdsdb"
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
const birdName=req.body.birdName
const commonName=req.body.commonName
const Category=req.body.Category
const food=req.body.food
const prey=req.body.prey
const habitat=req.body.habitat
const desc=req.body.desc

con.query(
  "INSERT INTO birdsall (birdName,Category,commonName,food,prey,habitat,desc) VALUES (?,?,?,?,?,?,?)",
[birdName,Category,commonName,food,prey,habitat,`desc`],
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