import "dotenv/config"; // load enviroment variables
import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routers/auth.router.js";

const port = process.env.SERVER_PORT || 3000;
const hostname = process.env.SERVER_HOSTNAME || "localhost";

const app = express();

// parse application/json
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse the Cookie header on the request
app.use(cookieParser());

// configure url routes
app.use("/api/auth", authRouter);

app.get("/api", (req, res) => {
  res.status(200).send(`${process.env.SERVER_PORT}`);
});

app.listen(port, hostname, () => {
  console.log(`Server is listening at ${hostname}:${port}`);
});
