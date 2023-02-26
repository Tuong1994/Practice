const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { rootRouter } = require("./router/root.router");

dotenv.config();

const PORT = process.env.PORT || 5002;

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api", rootRouter);

app.listen(PORT, () => {
  console.log("Server is running");
});
