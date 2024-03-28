const express = require("express");

require("dotenv").config();
const cors = require("cors");
const { connection } = require("mongoose");
const { userRouter } = require("./routes/user.routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users",userRouter)
app.get("/", (req, res) => {
    res.send("hello");
  });

  app.listen(process.env.PORT, async () => {
    try {
      await connection;
      console.log(process.env.MONGOURL)
      console.log("db connected");
      console.log("server  is connected");
    } catch (error) {
      console.log(error);
    }
  });