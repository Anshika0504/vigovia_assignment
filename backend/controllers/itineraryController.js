let itinerary = [];

exports.setItinerary = (req, res) => {
  const incomingData = req.body;

  // Normalize into array if needed
  const dataArray = Array.isArray(incomingData) ? incomingData : [incomingData];

  // Normalize and organize by slot
  itinerary = dataArray.map(day => ({
    day: day.day,
    date: day.date,
    title: day.title,
    activities: (day.activities || []).map(act => ({
      description: act.description,
      time: act.time
    }))
  }));

  res.status(200).json({ message: 'Itinerary saved successfully.' });
};

exports.getItinerary = (req, res) => {
  res.status(200).json(itinerary);
};
