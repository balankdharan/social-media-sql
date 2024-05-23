import express from "express";

import {
  getRelationShips,
  addRelationship,
  deleteRelationship,
} from "../controllers/realtionship.js";
const router = express.Router();

router.get("/", getRelationShips);
router.post("/", addRelationship);
router.delete("/", deleteRelationship);

export default router;
