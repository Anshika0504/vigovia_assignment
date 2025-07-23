package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Struct for Hotel Booking
type Hotel struct {
	City         string `json:"city"`
	CheckInDate  string `json:"checkInDate"`
	CheckOutDate string `json:"checkOutDate"`
	Nights       int    `json:"nights"`
	HotelName    string `json:"hotelName"`
}

// In-memory storage for hotel bookings
var hotelData []Hotel

// POST /hotels: Save hotel data
func SetHotels(c *gin.Context) {
	var incomingData []Hotel

	// Try to bind as array
	if err := c.ShouldBindJSON(&incomingData); err != nil {
		// Try to bind single object
		var single Hotel
		if err := c.ShouldBindJSON(&single); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"message": "Invalid hotel data format."})
			return
		}
		incomingData = []Hotel{single}
	}

	// Store in memory
	hotelData = incomingData

	c.JSON(http.StatusOK, gin.H{"message": "Hotel data stored successfully."})
}

// GET /hotels: Get hotel data
func GetHotels(c *gin.Context) {
	c.JSON(http.StatusOK, hotelData)
}
