const Pool = require('pg').Pool;

export const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'Rest_API_project',
  password: 'password',
  port: 5432,
})
