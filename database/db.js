
const mysql = require('mysql')
require('dotenv').config({path:'./.env'})


const port = process.env.PORT;

const conection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAMEDATABASE
})

conection.connect((err)=>{
    if(err) throw err
    console.log('La conexion funciona')
})

conection.query('SELECT * FROM irregular_verbs;',(err,row)=>{
    if(err) throw err
    console.log(row)
})

var  simpleForm = 'sing';
var  simplePast = 'sang';
var  participePast = 'sung';
var  translation = 'cantar';

const into = `INSERT INTO irregular_verbs(simpleForm, simplePast, participePast, translation ) 
VALUES ('${simpleForm}','${simplePast}','${participePast}','${translation}');`

console.log(into)

conection.query(into,(err,row)=>{
    if(err) throw err
    console.log('Data into')
})

conection.end()