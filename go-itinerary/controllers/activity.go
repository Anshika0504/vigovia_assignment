package controllers

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

// Activity structure (update fields as needed)
type Activity struct {
	Time        string `json:"time"`
	Description string `json:"description"`
}

// In-memory storage
var activityArray []Activity

// SetActivities handles POST /activities
func SetActivities(c *gin.Context) {
	var activities []Activity

	if err := c.ShouldBindJSON(&activities); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Expected an array of activities."})
		return
	}

	activityArray = activities
	c.JSON(http.StatusOK, gin.H{"message": "Activities stored in memory."})
}

// GetActivities handles GET /activities
func GetActivities(c *gin.Context) {
	c.JSON(http.StatusOK, activityArray)
}
