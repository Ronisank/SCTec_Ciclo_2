import { Request, Response } from "express";
import userModel from "../model/userModel";

function showLogin(req: Request, res: Response, next: any) {
  res.render("login");
  // const logado = await userModel.findOne();
  // res.json(logado);
}
async function login(req: Request, res: Response, next: any) {
  const logado = await userModel.findOne({
    where: {
      name: req.body.name,
      password: req.body.password,
    },
  });

  if (logado) {
    res.redirect("/clients");
  } else {
    res.status(401).json({ error: "Usuário não encontrado" });
  }
}

export default { showLogin, login };
