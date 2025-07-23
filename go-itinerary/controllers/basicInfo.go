package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Define the BasicInfo struct (you can expand this as needed)
type BasicInfo struct {
	Title         string `json:"title"`
	Name          string `json:"name"`
	Source        string `json:"source"`
	Destination   string `json:"destination"`
	Members       string `json:"members"`
	ArrivalDate   string `json:"arrivalDate"`
	DepartureDate string `json:"departureDate"`
	TravelDays    int    `json:"travelDays"`
}

// In-memory storage
var basicInfoArray []BasicInfo

// POST /basic-info: Store basic info in memory
func SetBasicInfo(c *gin.Context) {
	var basicInfo []BasicInfo

	if err := c.ShouldBindJSON(&basicInfo); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Expected an array of basic info."})
		return
	}

	basicInfoArray = basicInfo
	c.JSON(http.StatusOK, gin.H{"message": "Basic info received and stored in memory."})
}

// GET /basic-info: Retrieve stored basic info
func GetBasicInfo(c *gin.Context) {
	c.JSON(http.StatusOK, basicInfoArray)
}
