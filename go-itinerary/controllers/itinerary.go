package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Structs for itinerary data
type Activity struct {
	Description string `json:"description"`
	Time        string `json:"time"`
}

type DayItinerary struct {
	Day        int        `json:"day"`
	Date       string     `json:"date"`
	Title      string     `json:"title"`
	Activities []Activity `json:"activities"`
}

// In-memory itinerary storage
var itinerary []DayItinerary

// POST /itinerary: Save the itinerary
func SetItinerary(c *gin.Context) {
	var incomingData []DayItinerary

	// Accept both object and array by trying single object first
	if err := c.ShouldBindJSON(&incomingData); err != nil {
		// Try to parse single object
		var single DayItinerary
		if err := c.ShouldBindJSON(&single); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"message": "Invalid itinerary format."})
			return
		}
		incomingData = []DayItinerary{single}
	}

	// Normalize and assign
	itinerary = make([]DayItinerary, len(incomingData))
	for i, day := range incomingData {
		itinerary[i] = DayItinerary{
			Day:        day.Day,
			Date:       day.Date,
			Title:      day.Title,
			Activities: day.Activities,
		}
	}

	c.JSON(http.StatusOK, gin.H{"message": "Itinerary saved successfully."})
}

// GET /itinerary: Retrieve itinerary
func GetItinerary(c *gin.Context) {
	c.JSON(http.StatusOK, itinerary)
}
