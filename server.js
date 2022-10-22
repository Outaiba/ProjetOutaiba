const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());

const DB_connect = require("./DB-connect");

DB_connect();
app.use(express.json()); //middleware

//routers
app.use("/user", require("./routes/userRouter"));
app.use("/cars", require("./routes/carsRouter"));
app.use("/motos", require("./routes/motosRouter"));
app.use("/autres", require("./routes/autreVRouter"));

//create server

app.listen(process.env.PORT, (err) =>
  err
    ? console.log(err)
    : console.log(`server is running on port ${process.env.PORT}`)
);
