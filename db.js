import mysql from 'mysql'

const pool =  mysql.createPool({
  host:"localhost",
  user:"root",
  password:"",
  database:"hotel-database",
  port:"3306"
})
export default  pool