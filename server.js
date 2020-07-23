const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");
const morgan = require("morgan");

const connectDB = require("./config/db.js");
const colors = require("colors");

//Load config vars

dotenv.config({ path: "./config/config.env" });

//connect to  database
connectDB();

//Route files
const bootcamps = require("./routes/bootcamps");

const app = express(); //initialise

app.use(express.json());

//Dev Logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `server listening on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);

//Handle unhandled promise rejections

process.on("onunhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  //close server and exit
  server.close(() => process.exit(1));
});
