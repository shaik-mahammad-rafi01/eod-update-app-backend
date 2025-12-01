import { Router } from "express";
import { getAllEodUpdates } from "../controller/EodController.js";

export const EodUpdateRouter = Router();

EodUpdateRouter.get("/getEods", getAllEodUpdates)