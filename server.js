import express from 'express'
const app = express()
const port = 3000
import pool from "./db.js"

app.get('/', (req, res) => {
  res.send('Hello World!')
})
var reconnect = null

const connectServer =()=>{
  pool.getConnection((err )=>{
    if (err) {
      console.error(
        "Error creating connection pool:",
        err.message,
        "Reconnecting in 5 seconds..."
      );
      if (!reconnect) {
        reconnect = setInterval(() => {
          connectServer();
        }, 3307);
      }
      return;
    }
    clearInterval(reconnect);
    console.log("Connection pool created successfully.");
    conn.release();
  })
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})