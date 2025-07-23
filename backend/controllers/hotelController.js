let hotels = [];

exports.setHotel = (req, res) => {
  const incomingData = req.body;

  
  if (Array.isArray(incomingData)) {
    hotels = incomingData;
  } else {
    hotels = [incomingData]; 
  }

  res.status(200).json({ message: 'Hotel bookings saved successfully.' });
};

exports.getHotel = (req, res) => {
  res.status(200).json(hotels);
};
