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
app.use(express.static('uploads'))

const port = 3001


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Zargar@123",
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
            console.log(req.files.b_image)
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


app.get('/admin', (req, res) => {
    const sql = "SELECT c_id, c_name FROM categories;";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

app.get('/bird', (req, res) => {
    const sql = "SELECT c_id, c_name, c_desc, c_image FROM categories;";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

app.post('/getbirds', async (req, res) => {
    try {
        const c_id = req.body.c_id;

        const sql = "SELECT b_id, b_name, b_desc, b_image FROM birds WHERE birds.b_categ = ?;";
        con.query(sql, [c_id], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/getbirddata', async (req, res) => {
    try {
        const b_id = req.body.b_id;

        const sql = "SELECT b_name, b_cname, b_food, b_prey, b_habitat, b_desc, b_image FROM birds WHERE birds.b_categ = ?;";
        con.query(sql, [b_id], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (err) {
        res.status(500).send(err);
    }
});


app.listen(port, () => {
    console.log(`App is listening on PORT ${port}`)
});
