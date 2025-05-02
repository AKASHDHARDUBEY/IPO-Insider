import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import Search from "../components/Dashboard/Search";
import TabsComponent from "../components/Dashboard/Tabs";
import PaginationComponent from "../components/Dashboard/Pagination";
import TopButton from "../components/Common/TopButton";
import Footer from "../components/Common/Footer/footer";

function Dashboard() {
  const [ipos, setIpos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedIpos, setPaginatedIpos] = useState([]);
  const [selectedSector, setSelectedSector] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    // Mock data based on the provided IPO listings
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
    
    setIpos(mockIpoData);
    setPaginatedIpos(mockIpoData.slice(0, 10));
    setLoading(false);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSectorChange = (e) => {
    setSelectedSector(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const filteredIpos = ipos.filter((ipo) => {
    const matchesSearch = 
      ipo.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      ipo.symbol.toLowerCase().includes(search.trim().toLowerCase());
    
    const matchesSector = selectedSector === "all" || ipo.sector === selectedSector;
    const matchesCountry = selectedCountry === "all" || ipo.country === selectedCountry;
    const matchesType = selectedType === "all" || ipo.type === selectedType;
    
    return matchesSearch && matchesSector && matchesCountry && matchesType;
  });

  const handlePageChange = (event, value) => {
    setPage(value);
    const initialCount = (value - 1) * 10;
    setPaginatedIpos(ipos.slice(initialCount, initialCount + 10));
  };

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="filters">
            <select value={selectedType} onChange={handleTypeChange}>
              <option value="all">All IPOs</option>
              <option value="Mainline">Mainline IPO</option>
              <option value="SME">SME IPO</option>
            </select>
            <select value={selectedSector} onChange={handleSectorChange}>
              <option value="all">All Sectors</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="Energy">Energy</option>
            </select>
            <select value={selectedCountry} onChange={handleCountryChange}>
              <option value="all">All Countries</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="India">India</option>
            </select>
          </div>
          <Search search={search} handleChange={handleChange} />
          <TabsComponent
            ipos={search ? filteredIpos : paginatedIpos}
            setSearch={setSearch}
          />
          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      )}
      <TopButton />
      <Footer />
    </>
  );
}

export default Dashboard;

// coins == 100 coins

// PaginatedCoins -> Page 1 - coins.slice(0,10)
// PaginatedCoins -> Page 2 = coins.slice(10,20)
// PaginatedCoins -> Page 3 = coins.slice(20,30)
// .
// .
// PaginatedCoins -> Page 10 = coins.slice(90,100)

// PaginatedCoins -> Page X , then initial Count = (X-1)*10
// coins.slice(initialCount,initialCount+10)
