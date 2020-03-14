const Pool = require('pg').Pool;

const pool = new Pool({  
    host: 'ec2-52-23-14-156.compute-1.amazonaws.com',  
    user: 'wcjzmjuzjhykls',  
    database: 'dfp5kov2qiru23',  
    password: '2be1b0ff35663dfb074233adf7f7cf6ed713af7f484cf2f874adf4ef4fe7c5a8',
    port: 5432,
    ssl: true
});  

module.exports = pool;