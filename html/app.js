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
      client.query(`INSERT INTO Persons (lastname, firstname)
                    VALUES ('john', 'Doe');`,
                    (err, res) => {
                        if (err) {
                             console.log(err)
                        } else {
                            console.log(res);
                        }

                    }
        )
    }
})


app.use(express.static('dist'));

app.get('/', function(req, res){
    res.send('Hello');
});

app.listen(3000, function() {
    console.log('success');
});