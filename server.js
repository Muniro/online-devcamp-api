const express = require("express");
const dotenv = require("dotenv");

//LOad config vars

dotenv.config({ path: "./config/config.env" });

const app = express(); //initialise

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server listening on ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
