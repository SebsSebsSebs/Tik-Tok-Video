const Video = require("./models/dbModel");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

//set up express server

const app = express();

//middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.listen(5000, () => console.log("server started on port => ", 5000));

//post endpoint

app.post("/video/post", (req, res) => {
  const dbVideos = req.body;

  Video.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//get videos endpoint
app.get("/video", (req, res) => {
  Video.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//connect to mongoDB
mongoose.connect(
  process.env.DB_CONNECT_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.error(err);
    console.log("Connected to mongoDB");
  }
);
