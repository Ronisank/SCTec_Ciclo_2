import { Router } from "express";
import clientsController from "../controller/clientsController";

const router = Router();

router.get("/clients", clientsController.index);

router.get("/clients/cadastro", clientsController.create);
router.post("/clients/cadastro", clientsController.store);

router.get("/clients/edit/:id", clientsController.edit);
router.post("/clients/edit/:id", clientsController.update);

router.get("/clients/delete/:id", clientsController.del);

router.get("/clients/:id", clientsController.show);

export default router;
