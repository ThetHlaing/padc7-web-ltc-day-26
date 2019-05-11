const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'admin',
    password : '123456',
    database : 'mysqltest'
})

connection.connect((err)=>{
    if(err) throw err;
})

module.exports = connection;