const connection = require("./database/connection");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

connection();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.USAGE_PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.USAGE_PORT}`);
});
