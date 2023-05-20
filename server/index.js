const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "ingles",
});

app.use(express.json());
app.use(cors());

app.post("/register",(req ,res) => {
    const nome = req.body.name;
    const traduz = req.body.cost; 
    db.query("SELECT * FROM palavras WHERE nameeng = ? ",[nome],
    (err,result )=>{
        if(err){
            res.send(err);
        }
        if(result.length == 0){
            db.query("INSERT INTO palavras (nameeng,namept) VALUES ( ?, ?)",[nome , traduz], (err ,result)=>{
                if(err){
                    res.send(err);
                }
                res.send({msg: "Cadastrado com sucesso!!!"});
            })
        }else(
            res.send({msg: "Usuario já cadastrado!!!"})
        )
    });
});

app.listen(3001, () => {
    console.log("rodando servidor");
});

