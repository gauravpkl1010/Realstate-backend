import express from "express";
import {
  cancelBookings,
  createUser,
  getAllBookings,
  getAllFavorites,
  toFav,
} from "../controllers/userController.js";
import { bookVisit } from "../controllers/residencyController.js";
const router = express.Router();
router.post("/register", createUser);
router.post("/:id", bookVisit);
router.post("/allbookings", getAllBookings);
router.post("/removebookings", cancelBookings);
router.post("/tofav/:id", toFav);
router.post("/allfavs", getAllFavorites);

export default router;
