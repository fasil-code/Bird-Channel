var mysql = require('mysql2');
const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const _ = require('lodash');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(fileUpload({
    createParentPath: true
}));

const port = 3001


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "toor",
    database:"birdchannel"
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


app.post('/admin', async (req, res) => {
    try {
        if(!req.files.b_image) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            const b_name = req.body.b_name;
            const b_cname = req.body.b_cname;
            const b_food = req.body.b_food;
            const b_prey = req.body.b_prey;
            const b_habitat = req.body.b_habitat;
            const b_desc = req.body.b_desc;
            const b_categ = req.body.b_categ;
            const b_image = req.files.b_image;
            const b_image_path = './uploads/birds/' + b_image.name;
            b_image.mv(b_image_path);

            const sql = "INSERT INTO birds (b_name, b_cname, b_food, b_prey, b_habitat, b_desc, b_image, b_categ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            con.query(sql, [b_name, b_cname, b_food, b_prey, b_habitat, b_desc, b_image_path, b_categ], (err, result) => {
                if(err)console.log(err);
                else {
                    res.send({
                        status: true,
                        message: 'Values inserted/file uploaded',
                    });
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});


app.get('/getcategories', (req, res) => {
    const sql = "SELECT c_id, c_name FROM categories;";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});


app.listen(port, () => {
    console.log(`App is listening on PORT ${port}`)
});