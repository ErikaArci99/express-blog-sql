//importo mysql2
const mysql = require('mysql2');

//creo una variabile per la connessione al database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_blog'
});

//utilizzo la variabile per instaurare una connessione
connection.connect((err) => {
    if (err) {
        console.log('errore')
    }
    else {
        console.log('connected to my sql')
    }
})

module.exports = connection;