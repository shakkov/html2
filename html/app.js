const { query, response } = require('express');
const express = require('express');
const app = express();
const { Client } = require('pg')

const client = new Client({
    connectionString: 'postgres://axblscbecxkoew:0032c41e67d97c17b8e9f01fcc23eb51b62f48f5efa095dd629761218eaad7f0@ec2-34-252-98-12.eu-west-1.compute.amazonaws.com:5432/d3dgli5alfjk1o',
    ssl: { rejectUnauthorized: false }
})

client.connect(err => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected');
    }
})

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));


// app.get('/userlist', function(req, res) {

//     client.query('SELECT * FROM Persons', function(err, response) {
//         if (err) {
//             res.send('Error');
//         } else {
//             res.render('index', { title: 'Awesome page', users: response.rows });
//         }
//     })
// })

app.get('/', function(req, res) {
    res.render('index')
})

app.listen(3000, function() {
    console.log('success');
})