const express = require("express");
const app = express();
const port = 5000;
const morgan = require("morgan");
const path = require("path");
app.use(morgan("dev"));
const bodyParser = require("body-parser");
app.use(bodyParser.json());
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "csv"
});

app.use(express.static(path.join(__dirname, "./client/dist/")));

connection.connect(err => {
  if (err) {
    throw err;
  }
  console.log("connected");
});

app.get("/report", (req, res) => {
  connection.query("SELECT * FROM csv  ", (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
