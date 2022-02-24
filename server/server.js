const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const database = require("./config/database");
const userRoute = require("./routes/userRoute");
const dataRoute = require("./routes/dataRoute")

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

database.connect();

app.use("/user", userRoute);
app.use("/data",dataRoute)

app.listen(process.env.PORT, () =>
  console.log(`Server is up and running at port:${process.env.PORT}!`)
);
