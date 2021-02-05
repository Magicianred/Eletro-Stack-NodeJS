const mysql = require("mysql")

const connect = () => {
    console.log('Conexão com o banco de dados estabelecida!');
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'fseletro'
    });
}

module.exports = () => {
    return connect;
};