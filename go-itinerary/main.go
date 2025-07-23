package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"

	"yourproject/routes" // Update this with the correct module path
)

func main() {
	r := mux.NewRouter()

	// Apply CORS middleware
	corsHandler := handlers.CORS(
		handlers.AllowedOrigins([]string{"*"}), // You can restrict origins here
		handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}),
		handlers.AllowedHeaders([]string{"Content-Type", "Authorization"}),
	)

	// Load all routes
	routes.RegisterRoutes(r)

	// Start the server
	port := ":5000"
	fmt.Printf("Server running on %s\n", port)
	log.Fatal(http.ListenAndServe(port, corsHandler(r)))
}
