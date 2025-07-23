// Folder structure will look like this:
// go-travel-backend/
// ├── controllers/
// │   ├── basicInfo.go
// │   ├── itinerary.go
// │   ├── hotel.go
// │   ├── pdf.go
// ├── routes/
// │   └── router.go
// ├── views/
// │   └── template.ejs
// ├── pdfs/
// ├── main.go

// Here's the router.go file in Go (Golang):

package routes

import (
	"net/http"

	"github.com/gorilla/mux"
	"your_module_name/controllers"
)

func RegisterRoutes() *mux.Router {
	router := mux.NewRouter()

	// Basic Info
	router.HandleFunc("/basic-info", controllers.SetBasicInfo).Methods("POST")
	router.HandleFunc("/basic-info", controllers.GetBasicInfo).Methods("GET")

	// Activities
	router.HandleFunc("/activities", controllers.SetActivities).Methods("POST")
	router.HandleFunc("/activities", controllers.GetActivities).Methods("GET")

	// Flights
	router.HandleFunc("/flight", controllers.SetFlight).Methods("POST")
	router.HandleFunc("/flight", controllers.GetFlight).Methods("GET")

	// Hotels
	router.HandleFunc("/hotel", controllers.SetHotel).Methods("POST")
	router.HandleFunc("/hotel", controllers.GetHotel).Methods("GET")

	// Itinerary
	router.HandleFunc("/itinerary", controllers.SetItinerary).Methods("POST")
	router.HandleFunc("/itinerary", controllers.GetItinerary).Methods("GET")

	// PDF Generation
	router.HandleFunc("/generate-pdf", controllers.GeneratePDF).Methods("POST")

	return router
}

// Note:
// - Replace `your_module_name` with your actual Go module name.
// - The rest of the controller logic will be created for each controller file.
