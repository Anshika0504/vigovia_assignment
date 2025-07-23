let itinerary = [];

exports.setItinerary = (req, res) => {
  const incomingData = req.body;

  
  const dataArray = Array.isArray(incomingData) ? incomingData : [incomingData];

  
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
