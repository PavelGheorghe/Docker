const express = require('express');
const app = express();
const mysql = require('mysql');
const port = process.env.PORT;

// const con = mysql.createConnection({
//     host:'mysql',
//     user: "root",
//     password: "complexpassword",
//     database: 'Customer'
// });


// con.connect(function(err){
//    if(err) throw err;
//    console.log("Connceted");
// });


app.get('/', (req, res) => res.send('Hadasaaaaaasdewedwedwesdsaello tttdsdslsdsddocker ddaaano   kill my-container && docker rm my-container!'));
app.get('/gheorghe', (req, res) => res.send('gheorghe tttdsdslsdsddocker ddaaano   kill my-container && docker rm my-container!'));

app.listen(port, () => console.log(`Example app listening on port ${port}`));