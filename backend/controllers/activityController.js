let activityArray = [];

exports.setActivities = (req, res) => {
  const activities = req.body;

  if (!Array.isArray(activities)) {
    return res.status(400).json({ message: 'Expected an array of activities.' });
  }

  activityArray = activities;
  res.status(200).json({ message: 'Activities stored in memory.' });
};

exports.getActivities = (req, res) => {
  res.status(200).json(activityArray);
};
