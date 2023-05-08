import express from "express";
import mysql from "mysql";

const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "",
});

app.get("/", (req, res) => {
  res.send("Hello World! Welcome to the job tracker API");
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
