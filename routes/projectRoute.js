import express from "express";
import projectController from "../controllers/projectController.js";
import upload from "../middleware/multerStorage.js";

const router = express.Router();
router.post("/", upload.single("image"), projectController.addProject);
router.get("/", projectController.getProjects);
router.delete("/:id/:filename", projectController.deleteProject);
export default router;
