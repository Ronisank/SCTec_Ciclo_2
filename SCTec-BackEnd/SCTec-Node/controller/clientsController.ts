import { Request, Response } from "express";
import { IClients } from "../model/clients";
import clientsModel from "../model/clientsModel";



async function index(req: Request, res: Response, next: any) {
  const clients = await clientsModel.findAll();
  res.json(clients);
}
async function show(req: Request, res: Response, next: any) {
  const id = req.params.id as string;
  const client = await clientsModel.findByPk(id);
  res.json(client);
}
function create(req: Request, res: Response, next: any) {
  res.render("cadastro");
}
async function store(req: Request, res: Response, next: any) {
  let client = req.body as IClients;
  await clientsModel.create({ ...client });
  res.redirect("/clients/");
}
async function edit(req: Request, res: Response, next: any) {
  const id = req.params.id as string;
  const client = await clientsModel.findByPk(id);
  res.render("edit", { client: client });
}
async function update(req: Request, res: Response, next: any) {
  await clientsModel.update(req.body as IClients, {
    where: {
      id: req.params.id,
    },
  });
  res.redirect("/");
}
async function del(req: Request, res: Response, next: any) {
  await clientsModel.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.redirect("/clients/");
}

export default { index, create, store, show, edit, update, del };
