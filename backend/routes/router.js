const express = require('express');
const router = express.Router();

const basicInfoController = require('../controllers/basicInformation');
const activityController = require('../controllers/activityController');
const flightController = require('../controllers/flightController');
const hotelController = require('../controllers/hotelController');
const itineraryController = require('../controllers/itineraryController');
const pdfController = require('../controllers/pdfController');
// Basic Info Routes
router.post('/basic-info', basicInfoController.setBasicInfo);
router.get('/basic-info', basicInfoController.getBasicInfo);

// Activities Routes
router.post('/activities', activityController.setActivities);
router.get('/activities', activityController.getActivities);

// Flight Routes
router.post('/flight', flightController.setFlight);
router.get('/flight', flightController.getFlight);

// Hotel Routes
router.post('/hotel', hotelController.setHotel);
router.get('/hotel', hotelController.getHotel);


//itinerary
router.post('/itinerary', itineraryController.setItinerary);
router.get('/itinerary', itineraryController.getItinerary);

router.post('/generate-pdf', pdfController.generatePDF);

module.exports = router;
