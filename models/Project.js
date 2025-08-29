import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  type: { type: String, require: true },
  link: { type: String, require: true },
  image: { type: String, require: true },
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
