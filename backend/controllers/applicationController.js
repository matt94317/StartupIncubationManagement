// Get application
const application = require("../models/Application");
const getApplications = async (req, res) => {
  try {
    const applications = await application.find({ userId: req.user.id });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Add application
const addApplication = async (req, res) => {
  const { title, description, deadline } = req.body;
  try {
    const application = await Application.create({
      userId: req.user.id,
      title,
      description,
      deadline,
    });
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update application
const updateApplication = async (req, res) => {
  const { title, description, completed, deadline } = req.body;
  try {
    const application = await Application.findById(req.params.id);
    if (!application)
      return res.status(404).json({ message: "Application not found" });
    application.title = title || application.title;
    application.description = description || application.description;
    application.completed = completed ?? application.completed;
    application.deadline = deadline || application.deadline;
    const updatedApplication = await application.save();
    res.json(updatedApplication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete application
const deleteApplication = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application)
      return res.status(404).json({ message: "Application not found" });
    await application.remove();
    res.json({ message: "Application deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getApplications,
  addApplication,
  updateApplication,
  deleteApplication,
};
