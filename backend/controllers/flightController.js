let flights = [];

exports.setFlight = (req, res) => {
  const incomingData = req.body;

  // Ensure we always store as an array
  if (Array.isArray(incomingData)) {
    flights = incomingData;
  } else {
    flights = [incomingData]; // Wrap single flight into array
  }

  res.status(200).json({ message: 'Flights saved successfully.' });
};

exports.getFlight = (req, res) => {
  res.status(200).json(flights);
};
