const mysql = require('mysql2');

require('dotenv').config();

// pool de conexiones

const pool = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.dbpass,
    database: process.env.db,
    port: 3306,
    waitForConections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

// testeo de conexion

pool.getConnection((error,connection) => {
    if (error) {
        console.error('Error al obtener una conexion: ',error);
    } else {
        console.log('conexion exitosa a la base de datos');
        connection.release();
    }
});

module.exports = {
    conn: pool.promise()
};