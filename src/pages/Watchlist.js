import React, { useEffect, useState } from "react";
import Button from "../components/Common/Button";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import Footer from "../components/Common/Footer/footer";

function Watchlist() {
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  const [ipos, setIpos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (watchlist) {
      getData();
    }
  }, []);

  const getData = () => {
    setLoading(true);
    // Mock data - this should be replaced with actual API call
    const mockIpoData = [
      {
        id: "sdm",
        name: "Smart Digital Group Ltd",
        symbol: "SDM",
        exchange: "NASDAQ",
        ipoValue: "9.0M",
        priceRange: "4.00-6.00",
        lastPrice: "-",
        listingDate: "2025-05-02",
        sector: "Technology",
        country: "USA",
        type: "SME",
        description: "Smart Digital Group specializes in digital transformation solutions.",
        openDate: "2025-05-02",
        closeDate: "2025-05-06"
      },
      {
        id: "apus",
        name: "Apimeds Pharma US Inc",
        symbol: "APUS",
        exchange: "NYSE",
        ipoValue: "22.5M",
        priceRange: "4.00-5.00",
        lastPrice: "-",
        listingDate: "2025-05-08",
        sector: "Healthcare",
        country: "USA",
        type: "Mainline",
        description: "Apimeds Pharma is a pharmaceutical company focused on innovative drug development.",
        openDate: "2025-05-08",
        closeDate: "2025-05-12"
      },
      {
        id: "egg",
        name: "Enigmatig Ltd",
        symbol: "EGG",
        exchange: "NYSE",
        ipoValue: "18.8M",
        priceRange: "4.00-5.00",
        lastPrice: "-",
        listingDate: "2025-05-08",
        sector: "Technology",
        country: "UK",
        type: "SME",
        description: "Enigmatig provides cutting-edge cybersecurity solutions.",
        openDate: "2025-05-08",
        closeDate: "2025-05-12"
      },
      {
        id: "aii",
        name: "American Integrity Insurance Inc",
        symbol: "AII",
        exchange: "NYSE",
        ipoValue: "116.9M",
        priceRange: "15.00-17.00",
        lastPrice: "-",
        listingDate: "2025-05-08",
        sector: "Finance",
        country: "USA",
        type: "Mainline",
        description: "American Integrity Insurance is a leading insurance provider.",
        openDate: "2025-05-08",
        closeDate: "2025-05-12"
      }
    ];

    // Filter IPOs based on watchlist
    const watchlistIpos = mockIpoData.filter(ipo => watchlist.includes(ipo.id));
    setIpos(watchlistIpos);
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <div className="watchlist-container">
        {watchlist?.length > 0 && ipos.length > 0 ? (
          <TabsComponent ipos={ipos} />
        ) : (
          <div className="empty-watchlist">
            <h1>No IPOs in your watchlist</h1>
            <p>Add IPOs to your watchlist to track them easily</p>
            <div className="watchlist-action">
              <a href="/dashboard">
                <Button text="Browse IPOs" />
              </a>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Watchlist;
