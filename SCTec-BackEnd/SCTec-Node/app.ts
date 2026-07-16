import express from "express";
import db from "../SCTec-Node/db";
import clientsRouter from "./routers/clients";
import userRouter from "./routers/user";


const app = express();

app.use(express.urlencoded({extended: true}));
app.use(clientsRouter);
app.use(userRouter);
app.set("view engine", "pug");
app.set("views", "./views");

db.sync()
  .then(() => {
    console.log("Banco de dados conectado " + process.env.DB_NAME);
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Servidor rodando na porta " + process.env.PORT + "...");
    });
  });
