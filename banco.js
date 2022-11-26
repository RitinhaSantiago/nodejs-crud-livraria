const banco = require('mysql2')

const pool = banco.createPool({
    'host': 'bd2e22gb8.mysql.dbaas.com.br',
    'user': 'bd2e22gb8',
    'password': 'bd2egb8@minas',
    'database': 'bd2e22gb8',
    'port': '3306'
})

exports.pool = pool