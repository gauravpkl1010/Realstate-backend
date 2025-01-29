import express from "express";
import {
  createResidency,
  getAllResidency,
  getResidency,
} from "../controllers/residencyController.js";

const router = express.Router();

router.post("/create", createResidency);
router.get("/getallresidency", getAllResidency);
router.get("/:id", getResidency);
export default router;
