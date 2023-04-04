const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const taskRouter = require("./routers/taskRouter");

app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hellwet");
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/tasks", taskRouter);
