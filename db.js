import mysql from 'mysql'

const pool =  mysql.createPool({
  host:"localhost",
  username:"root",
  password:"",
  database:"hotel-database",
  port:"3307"
})
export default  pool