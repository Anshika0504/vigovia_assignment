let hotels = [];

exports.setHotel = (req, res) => {
  const incomingData = req.body;

  // Ensure the incoming data is always treated as an array
  if (Array.isArray(incomingData)) {
    hotels = incomingData;
  } else {
    hotels = [incomingData]; // Wrap single object into an array
  }

  res.status(200).json({ message: 'Hotel bookings saved successfully.' });
};

exports.getHotel = (req, res) => {
  res.status(200).json(hotels);
};
