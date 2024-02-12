import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
import pool from "./db.js";
import routes from "./routes/user.route.js";

app.use(express.json())
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
var reconnect = null;

const connectServer = () => {
  pool.getConnection((err, conn) => {
    if (err) {
      console.error(
        "Error creating connection pool:",
        err.message,
        "Reconnecting in 5 seconds..."
      );
      if (!reconnect) {
        reconnect = setInterval(() => {
          connectServer();
        }, 4306);
      }
      return;
    }
    clearInterval(reconnect);
    console.log("Connection pool created successfully.");
    conn.release();
  });
};

connectServer()

app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
