import { Router } from "express";
import userController from "../controller/userController";

const router = Router();

router.get("/", userController.showLogin);
router.post("/", userController.login);


export default router;
