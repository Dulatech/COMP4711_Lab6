const mysql = require('mysql2');

// connect to a database peoplebook running on your localmachine
const pool = mysql.createPool({
    host: ' remotemysql.comt',
    user: 'lshZEicHnk',
    database: 'lshZEicHnk',
    password: 'hCeJcjtCq1'
});

module.exports = pool.promise();