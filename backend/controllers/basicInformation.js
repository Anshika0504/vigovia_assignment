let basicInfoArray = []; // In-memory array

// POST: Receive and store data in memory only
exports.setBasicInfo = (req, res) => {
  const basicInfo = req.body;

  if (!Array.isArray(basicInfo)) {
    return res.status(400).json({ message: 'Expected an array of basic info.' });
  }

  basicInfoArray = basicInfo;

  res.status(200).json({ message: 'Basic info received and stored in memory.' });
};

// GET: Return the in-memory array
exports.getBasicInfo = (req, res) => {
  res.status(200).json(basicInfoArray);
};
