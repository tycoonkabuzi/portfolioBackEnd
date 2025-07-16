import Project from "../models/Project.js";
import fs from "fs";
import path from "path";

const projectController = {
  addProject: async (req, res) => {
    try {
      const { title, description, type, link } = req.body;
      const image = req.file ? req.file.filename : "picture.jpg";

      const newProject = new Project({ title, description, type, link, image });

      await newProject.save();

      res.status(201).json(newProject);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getProjects: async (_req, res) => {
    try {
      const projects = await Project.find();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ err: error });
    }
  },

  deleteProject: async (req, res) => {
    try {
      const { id, filename } = req.params;
      const projectToDelete = await Project.findByIdAndDelete(id);

      const filePath = path.resolve("uploads", filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      res.status(204).json(projectToDelete);
    } catch (error) {
      res.status(500).json({ err: error });
    }
  },
};
export default projectController;
