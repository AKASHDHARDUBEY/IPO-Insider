import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import Footer from "../components/Common/Footer/footer";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./styles.css";

function IpoDetails() {
  const { id } = useParams();
  const [ipo, setIpo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    // Mock data for now - replace with actual API call later
    const mockIpoData = {
      id: "oms-energy",
      name: "Oms Energy Technologies Inc",
      symbol: "OMSE",
      exchange: "NASDAQ",
      ipoValue: "55.6M",
      priceRange: "8.00-10.00",
      lastPrice: "9.00",
      listingDate: "2025-05-01",
      sector: "Energy",
      country: "USA",
      description: "A leading energy technology company specializing in renewable energy solutions.",
      openDate: "2025-05-01",
      closeDate: "2025-05-05",
      companyBackground: "Tata Technologies is a global product engineering company that provides services in engineering and design, research and development, manufacturing, enterprise IT and product lifecycle management. The company has a strong presence in the automotive, aerospace, and industrial machinery sectors.",
      postListingPerformance: {
        listingGain: "+12.5%",
        currentPrice: "10.25",
        chartData: [] // Add chart data here
      }
    };
    
    setIpo(mockIpoData);
    setLoading(false);
  };

  const handleAddToCalendar = () => {
    // Implement calendar integration
    console.log("Add to calendar:", ipo);
  };

  const handleSetReminder = () => {
    // Implement reminder functionality
    console.log("Set reminder for:", ipo);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <div className="ipo-details-container">
        <div className="ipo-header">
          <div className="ipo-title">
            <h1>{ipo.name}</h1>
            <p className="ipo-symbol">{ipo.symbol}</p>
          </div>
          <div className="action-buttons">
            <button 
              className="calendar-button"
              onClick={handleAddToCalendar}
            >
              <CalendarTodayIcon /> Add to Calendar
            </button>
            <button 
              className="reminder-button"
              onClick={handleSetReminder}
            >
              <NotificationsIcon /> Set Reminder
            </button>
          </div>
        </div>

        <div className="ipo-info-grid">
          <div className="info-card">
            <h3>IPO Details</h3>
            <div className="info-item">
              <span className="label">Exchange:</span>
              <span className="value">{ipo.exchange}</span>
            </div>
            <div className="info-item">
              <span className="label">IPO Value:</span>
              <span className="value">{ipo.ipoValue}</span>
            </div>
            <div className="info-item">
              <span className="label">Price Range:</span>
              <span className="value">{ipo.priceRange}</span>
            </div>
            <div className="info-item">
              <span className="label">Last Price:</span>
              <span className="value">{ipo.lastPrice}</span>
            </div>
          </div>

          <div className="info-card">
            <h3>Important Dates</h3>
            <div className="info-item">
              <span className="label">Open Date:</span>
              <span className="value">{ipo.openDate}</span>
            </div>
            <div className="info-item">
              <span className="label">Close Date:</span>
              <span className="value">{ipo.closeDate}</span>
            </div>
            <div className="info-item">
              <span className="label">Listing Date:</span>
              <span className="value">{ipo.listingDate}</span>
            </div>
          </div>

          <div className="info-card">
            <h3>Company Information</h3>
            <div className="info-item">
              <span className="label">Sector:</span>
              <span className="value">{ipo.sector}</span>
            </div>
            <div className="info-item">
              <span className="label">Country:</span>
              <span className="value">{ipo.country}</span>
            </div>
          </div>
        </div>

        <div className="company-background">
          <h3>Company Background</h3>
          <p>{ipo.companyBackground}</p>
        </div>

        {ipo.postListingPerformance && (
          <div className="post-listing-performance">
            <h3>Post-Listing Performance</h3>
            <div className="performance-grid">
              <div className="performance-item">
                <span className="label">Listing Gain/Loss:</span>
                <span className="value">{ipo.postListingPerformance.listingGain}</span>
              </div>
              <div className="performance-item">
                <span className="label">Current Price:</span>
                <span className="value">{ipo.postListingPerformance.currentPrice}</span>
              </div>
            </div>
            {/* Add chart component here */}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default IpoDetails; 