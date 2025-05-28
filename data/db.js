const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ErikaArci.123',
    database: 'db_blog'
});

connection.connect((err) => {
    if (err) {
        console.error('Errore di connessione:', err);
    } else {
        console.log('Connected to MySQL');
    }
});

module.exports = connection;
