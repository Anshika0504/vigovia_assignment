let basicInfoArray = []; 


exports.setBasicInfo = (req, res) => {
  const basicInfo = req.body;

  if (!Array.isArray(basicInfo)) {
    return res.status(400).json({ message: 'Expected an array of basic info.' });
  }

  basicInfoArray = basicInfo;

  res.status(200).json({ message: 'Basic info received and stored in memory.' });
};


exports.getBasicInfo = (req, res) => {
  res.status(200).json(basicInfoArray);
};
