package controllers

import (
	"bytes"
	"fmt"
	"html/template"
	"net/http"
	"os"
	"path/filepath"

	pdf "github.com/SebastiaanKlippert/go-wkhtmltopdf"
	"github.com/gin-gonic/gin"
)

// GeneratePDF generates and returns a PDF from template and form data
func GeneratePDF(c *gin.Context) {
	var formData map[string]interface{}

	if err := c.BindJSON(&formData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Invalid input data"})
		return
	}

	// Load and parse the template
	tmplPath := filepath.Join("views", "template.html")
	tmpl, err := template.ParseFiles(tmplPath)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Template parse error"})
		return
	}

	// Execute template with data
	var htmlBuffer bytes.Buffer
	if err := tmpl.Execute(&htmlBuffer, formData); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Template execution error"})
		return
	}

	// Generate PDF using wkhtmltopdf
	pdfg, err := pdf.NewPDFGenerator()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create PDF generator"})
		return
	}

	page := pdf.NewPageReader(bytes.NewReader(htmlBuffer.Bytes()))
	page.FooterRight.Set("[page]")
	page.FooterFontSize.Set(10)
	pdfg.AddPage(page)

	pdfg.Orientation.Set(pdf.OrientationPortrait)
	pdfg.Dpi.Set(300)
	pdfg.PageSize.Set(pdf.PageSizeA4)

	err = pdfg.Create()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create PDF"})
		return
	}

	// Save to file
	outputPath := filepath.Join("pdfs", "itinerary.pdf")
	if err := os.WriteFile(outputPath, pdfg.Bytes(), 0644); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save PDF"})
		return
	}

	// Send PDF back
	c.Header("Content-Type", "application/pdf")
	c.Header("Content-Disposition", "attachment; filename=itinerary.pdf")
	c.Data(http.StatusOK, "application/pdf", pdfg.Bytes())
}
