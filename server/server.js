const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const database = require("./config/database");
const userRoute = require("./routers/userRoute");

const app = express();

dotenv.config();
app.use(express.json())
app.use(cors());

database.connect();

app.use("/user", userRoute);

app.listen(process.env.PORT, () =>
  console.log(`Server is up and running at port:${process.env.PORT}!`)
);
