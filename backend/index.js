const express = require("express");
const cors = require("cors");
const app = express();

const authRouter = require("./routes/auth");
const TaskRouter = require("./routes/TaskRouter");

require("dotenv").config();
require("./models/db");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/tasks", TaskRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
