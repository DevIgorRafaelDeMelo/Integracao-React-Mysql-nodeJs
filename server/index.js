const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "ingles",

});



app.get('/', (req , res) =>{
    db.query("INSERT INTO palavras ( nameeng , namept ) VALUES ( 'home' , 'casa');");
    
});


app.listen(3001, () => {
    console.log("rodando servidor");
});