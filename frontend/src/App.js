import './App.css';
import Activities from './components/Activities';
import CompanyDetail from './components/CompanyDetails';
import Flight from './components/Flight';
import Footer from './components/Footer';
import HeaderSection from './components/HeaderSection';
import HotelBookings from './components/HotelBookings';
import InfoCard from './components/InfoCard';
import Itinerary from './components/Itinerary';
import PaymentPlan from './components/PaymentPlan';
import Visa from './components/Visa';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useRef } from 'react';

function App() {
  const pdfRef = useRef();

  const generatePDF = () => {
    const input = pdfRef.current;

    html2canvas(input, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      // Add the first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position -= pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save('itinerary.pdf');
    });
  };

  return (
    <>
     

      <div ref={pdfRef} style={{ padding: '20px', backgroundColor: 'white' }}>
        <HeaderSection />
        <Itinerary />
        <Flight />
        <HotelBookings />
        <InfoCard />
        <Activities />
        <Visa />
        <PaymentPlan />
        <Footer />
        <CompanyDetail />
      </div>
       <button onClick={generatePDF} style={{ margin: '20px', padding: '10px' }}>
        Download PDF
      </button>
    </>
  );
}

export default App;
