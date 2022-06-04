const getAllProjects = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Fetching all projects successfully",
  });
};

module.exports = {
  getAllProjects,
};
