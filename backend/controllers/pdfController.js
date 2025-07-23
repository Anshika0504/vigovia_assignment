const ejs = require('ejs');
const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');

exports.generatePDF = async (req, res) => {
  try {
    const data = req.body; // form data sent from frontend

    const html = await ejs.renderFile(
      path.join(__dirname, '../views/template.ejs'),
      { ...data }
    );

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    const pdfBuffer = await page.pdf({ format: 'A4' });
    await browser.close();

    // Save PDF to /pdfs
    const filePath = path.join(__dirname, '../pdfs', 'itinerary.pdf');
    fs.writeFileSync(filePath, pdfBuffer);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=itinerary.pdf',
    });

    res.send(pdfBuffer);
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).send('Internal Server Error');
  }
};
