import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import morgan from "morgan";
import gloabalRouter from "./routers/globalRouter";

const app = express();
const PORT = process.env.PORT;

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));

app.use("/", gloabalRouter);

app.listen(PORT, () => {
  console.log(`${PORT} start`);
});
