import { Router } from "express";
import { Register } from "../controller/user.controller.js";

const routes = Router()

routes.post('/Register', Register)

export default routes