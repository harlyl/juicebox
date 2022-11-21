require("dotenv").config();
const PORT = 3000;
const { application } = require("express");
const express = require("express");
const morgan = require("morgan");
const server = express();
const apiRouter = require("./api");

server.use(morgan("dev"));

server.use(express.json());

server.use("/api", apiRouter);

const { client } = require("./db");
client.connect();

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
