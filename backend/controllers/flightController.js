let flights = [];

exports.setFlight = (req, res) => {
  const incomingData = req.body;


  if (Array.isArray(incomingData)) {
    flights = incomingData;
  } else {
    flights = [incomingData]; 
  }

  res.status(200).json({ message: 'Flights saved successfully.' });
};

exports.getFlight = (req, res) => {
  res.status(200).json(flights);
};
