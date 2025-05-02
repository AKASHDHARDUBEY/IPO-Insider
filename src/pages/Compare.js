import React, { useEffect, useState } from "react";
import Info from "../components/CoinPage/Info";
import LineChart from "../components/CoinPage/LineChart";
import ToggleComponents from "../components/CoinPage/ToggleComponent";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import SelectCoins from "../components/ComparePage/SelectCoins";
import List from "../components/Dashboard/List";
import { get100Coins } from "../functions/get100Coins";
import { getCoinData } from "../functions/getCoinData";
import { getPrices } from "../functions/getPrices";
import { settingChartData } from "../functions/settingChartData";
import { settingCoinObject } from "../functions/settingCoinObject";
import SelectIPO from "../components/Compare/SelectIPO";
import CompareTable from "../components/Compare/CompareTable";
import Footer from "../components/Common/Footer/footer";
import "./styles.css";

function Compare() {
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  // id states
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  // data states
  const [coin1Data, setCoin1Data] = useState({});
  const [coin2Data, setCoin2Data] = useState({});
  // days state
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [ipos, setIpos] = useState([]);
  const [selectedIpo1, setSelectedIpo1] = useState(null);
  const [selectedIpo2, setSelectedIpo2] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const coins = await get100Coins();
    if (coins) {
      setAllCoins(coins);
      const data1 = await getCoinData(crypto1);
      const data2 = await getCoinData(crypto2);
      settingCoinObject(data1, setCoin1Data);
      settingCoinObject(data2, setCoin2Data);
      if (data1 && data2) {
        // getPrices
        const prices1 = await getPrices(crypto1, days, priceType);
        const prices2 = await getPrices(crypto2, days, priceType);
        settingChartData(setChartData, prices1, prices2);
      }
    }
    // Mock data - this should be replaced with actual API call
    const mockIpoData = [
      {
        id: "mjl",
        name: "Manoj Jewellers Ltd",
        symbol: "MJL",
        exchange: "BSE SME",
        ipoValue: "16.20 Cr",
        priceRange: "54",
        lastPrice: "-",
        listingDate: "2025-05-12",
        sector: "Jewellery",
        country: "India",
        type: "SME",
        description: "Manoj Jewellers Ltd is a jewellery manufacturing and retail company.",
        openDate: "2025-05-05",
        closeDate: "2025-05-07",
        lotSize: 2000,
        issueSize: "16.20 Cr",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "sdl",
        name: "Srigee DLM Ltd",
        symbol: "SDL",
        exchange: "BSE SME",
        ipoValue: "16.98 Cr",
        priceRange: "94-99",
        lastPrice: "-",
        listingDate: "2025-05-12",
        sector: "Manufacturing",
        country: "India",
        type: "SME",
        description: "Srigee DLM Ltd is a manufacturing company.",
        openDate: "2025-05-05",
        closeDate: "2025-05-07",
        lotSize: 1200,
        issueSize: "16.98 Cr",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "te",
        name: "Tankup Engineers",
        symbol: "TE",
        exchange: "BSE SME",
        ipoValue: "19.53 Cr",
        priceRange: "140",
        lastPrice: "183.75",
        listingDate: "2025-04-30",
        sector: "Engineering",
        country: "India",
        type: "SME",
        description: "Tankup Engineers is an engineering solutions provider.",
        openDate: "2025-04-25",
        closeDate: "2025-04-27",
        lotSize: 1000,
        issueSize: "19.53 Cr",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "is",
        name: "Infonative Solutions",
        symbol: "IS",
        exchange: "BSE SME",
        ipoValue: "24.71 Cr",
        priceRange: "79",
        lastPrice: "37.49",
        listingDate: "2025-04-08",
        sector: "Technology",
        country: "India",
        type: "SME",
        description: "Infonative Solutions is a technology company.",
        openDate: "2025-04-03",
        closeDate: "2025-04-05",
        lotSize: 1500,
        issueSize: "24.71 Cr",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "sc",
        name: "Spinaroo Commercial",
        symbol: "SC",
        exchange: "BSE SME",
        ipoValue: "10.17 Cr",
        priceRange: "51",
        lastPrice: "74.86",
        listingDate: "2025-04-08",
        sector: "Commercial",
        country: "India",
        type: "SME",
        description: "Spinaroo Commercial is a commercial services company.",
        openDate: "2025-04-03",
        closeDate: "2025-04-05",
        lotSize: 2000,
        issueSize: "10.17 Cr",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "apf",
        name: "Aten Papers and Foam Ltd",
        symbol: "APF",
        exchange: "BSE",
        ipoValue: "22.19 Cr",
        priceRange: "96",
        lastPrice: "-",
        listingDate: "2025-04-07",
        sector: "Paper",
        country: "India",
        type: "Mainline",
        description: "Aten Papers and Foam Ltd is a paper manufacturing company.",
        openDate: "2025-04-02",
        closeDate: "2025-04-04",
        lotSize: 1500,
        issueSize: "22.19 Cr",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "ri",
        name: "Retaggio Industries",
        symbol: "RI",
        exchange: "BSE SME",
        ipoValue: "15.50 Cr",
        priceRange: "25",
        lastPrice: "20.90",
        listingDate: "2025-04-07",
        sector: "Manufacturing",
        country: "India",
        type: "SME",
        description: "Retaggio Industries is a manufacturing company.",
        openDate: "2025-04-02",
        closeDate: "2025-04-04",
        lotSize: 6000,
        issueSize: "15.50 Cr",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "ixw",
        name: "Identixweb",
        symbol: "IXW",
        exchange: "BSE SME",
        ipoValue: "16.63 Cr",
        priceRange: "54",
        lastPrice: "61.95",
        listingDate: "2025-04-03",
        sector: "Technology",
        country: "India",
        type: "SME",
        description: "Identixweb is a technology solutions provider.",
        openDate: "2025-03-29",
        closeDate: "2025-03-31",
        lotSize: 2000,
        issueSize: "16.63 Cr",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "san",
        name: "Shri Ahimsa Naturals",
        symbol: "SAN",
        exchange: "BSE SME",
        ipoValue: "73.81 Cr",
        priceRange: "119",
        lastPrice: "155.45",
        listingDate: "2025-04-02",
        sector: "FMCG",
        country: "India",
        type: "SME",
        description: "Shri Ahimsa Naturals is a natural products company.",
        openDate: "2025-03-28",
        closeDate: "2025-03-30",
        lotSize: 1200,
        issueSize: "73.81 Cr",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "aes",
        name: "ATC Energies System",
        symbol: "AES",
        exchange: "BSE SME",
        ipoValue: "63.76 Cr",
        priceRange: "118",
        lastPrice: "105.35",
        listingDate: "2025-04-02",
        sector: "Energy",
        country: "India",
        type: "SME",
        description: "ATC Energies System is an energy solutions provider.",
        openDate: "2025-03-28",
        closeDate: "2025-03-30",
        lotSize: 1000,
        issueSize: "63.76 Cr",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "di",
        name: "Desco Infratech",
        symbol: "DI",
        exchange: "BSE SME",
        ipoValue: "30.75 Cr",
        priceRange: "150",
        lastPrice: "243.70",
        listingDate: "2025-04-01",
        sector: "Infrastructure",
        country: "India",
        type: "SME",
        description: "Desco Infratech is an infrastructure development company.",
        openDate: "2025-03-27",
        closeDate: "2025-03-29",
        lotSize: 1000,
        issueSize: "30.75 Cr",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "rfms",
        name: "Rapid Fleet Management Services",
        symbol: "RFMS",
        exchange: "BSE SME",
        ipoValue: "43.87 Cr",
        priceRange: "192",
        lastPrice: "209.45",
        listingDate: "2025-03-28",
        sector: "Logistics",
        country: "India",
        type: "SME",
        description: "Rapid Fleet Management Services is a logistics company.",
        openDate: "2025-03-23",
        closeDate: "2025-03-25",
        lotSize: 750,
        issueSize: "43.87 Cr",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "ai",
        name: "Active Infrastructures",
        symbol: "AI",
        exchange: "BSE SME",
        ipoValue: "77.83 Cr",
        priceRange: "181",
        lastPrice: "172.00",
        listingDate: "2025-03-28",
        sector: "Infrastructure",
        country: "India",
        type: "SME",
        description: "Active Infrastructures is an infrastructure development company.",
        openDate: "2025-03-23",
        closeDate: "2025-03-25",
        lotSize: 800,
        issueSize: "77.83 Cr",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "gch",
        name: "Grand Continent Hotels",
        symbol: "GCH",
        exchange: "BSE SME",
        ipoValue: "74.46 Cr",
        priceRange: "113",
        lastPrice: "155.10",
        listingDate: "2025-03-27",
        sector: "Hospitality",
        country: "India",
        type: "SME",
        description: "Grand Continent Hotels is a hospitality company.",
        openDate: "2025-03-22",
        closeDate: "2025-03-24",
        lotSize: 1000,
        issueSize: "74.46 Cr",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "omse",
        name: "Oms Energy Technologies Inc",
        symbol: "OMSE",
        exchange: "NASDAQ",
        ipoValue: "55.6M",
        priceRange: "8.00-10.00",
        lastPrice: "9.00",
        listingDate: "2025-05-01",
        sector: "Energy",
        country: "USA",
        type: "Mainline",
        description: "Oms Energy Technologies Inc is an energy technology company.",
        openDate: "2025-04-27",
        closeDate: "2025-04-29",
        lotSize: 100,
        issueSize: "55.6M",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "copl",
        name: "Copley Acq Corp",
        symbol: "COPL_u",
        exchange: "NYSE",
        ipoValue: "150.0M",
        priceRange: "10.00",
        lastPrice: "10.00",
        listingDate: "2025-05-01",
        sector: "SPAC",
        country: "USA",
        type: "Mainline",
        description: "Copley Acq Corp is a Special Purpose Acquisition Company.",
        openDate: "2025-04-27",
        closeDate: "2025-04-29",
        lotSize: 100,
        issueSize: "150.0M",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "rdag",
        name: "Republic Digital Acq Co",
        symbol: "RDAGU",
        exchange: "NASDAQ",
        ipoValue: "220.0M",
        priceRange: "10.00",
        lastPrice: "10.15",
        listingDate: "2025-05-01",
        sector: "SPAC",
        country: "USA",
        type: "Mainline",
        description: "Republic Digital Acq Co is a Special Purpose Acquisition Company focused on digital technologies.",
        openDate: "2025-04-27",
        closeDate: "2025-04-29",
        lotSize: 100,
        issueSize: "220.0M",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "yb",
        name: "Yuanbao Inc",
        symbol: "YB",
        exchange: "NASDAQ",
        ipoValue: "30.0M",
        priceRange: "15.00",
        lastPrice: "15.00",
        listingDate: "2025-04-30",
        sector: "Technology",
        country: "China",
        type: "Mainline",
        description: "Yuanbao Inc is a technology company.",
        openDate: "2025-04-25",
        closeDate: "2025-04-27",
        lotSize: 100,
        issueSize: "30.0M",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "taco",
        name: "Berto Acquisition Corp",
        symbol: "TACOU",
        exchange: "NASDAQ",
        ipoValue: "250.0M",
        priceRange: "10.00",
        lastPrice: "10.14",
        listingDate: "2025-04-30",
        sector: "SPAC",
        country: "USA",
        type: "Mainline",
        description: "Berto Acquisition Corp is a Special Purpose Acquisition Company.",
        openDate: "2025-04-25",
        closeDate: "2025-04-27",
        lotSize: 100,
        issueSize: "250.0M",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "lccc",
        name: "Lakeshore Acq III Corp",
        symbol: "LCCCU",
        exchange: "NASDAQ",
        ipoValue: "60.0M",
        priceRange: "10.00",
        lastPrice: "10.03",
        listingDate: "2025-04-30",
        sector: "SPAC",
        country: "USA",
        type: "Mainline",
        description: "Lakeshore Acq III Corp is a Special Purpose Acquisition Company.",
        openDate: "2025-04-25",
        closeDate: "2025-04-27",
        lotSize: 100,
        issueSize: "60.0M",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "raaq",
        name: "Real Asset Acq Corp",
        symbol: "RAAQU",
        exchange: "NASDAQ",
        ipoValue: "150.0M",
        priceRange: "10.00",
        lastPrice: "10.10",
        listingDate: "2025-04-29",
        sector: "SPAC",
        country: "USA",
        type: "Mainline",
        description: "Real Asset Acq Corp is a Special Purpose Acquisition Company focused on real assets.",
        openDate: "2025-04-24",
        closeDate: "2025-04-26",
        lotSize: 100,
        issueSize: "150.0M",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "daaq",
        name: "Digital Asset Acq Corp",
        symbol: "DAAQU",
        exchange: "NASDAQ",
        ipoValue: "150.0M",
        priceRange: "10.00",
        lastPrice: "10.26",
        listingDate: "2025-04-29",
        sector: "SPAC",
        country: "USA",
        type: "Mainline",
        description: "Digital Asset Acq Corp is a Special Purpose Acquisition Company focused on digital assets.",
        openDate: "2025-04-24",
        closeDate: "2025-04-26",
        lotSize: 100,
        issueSize: "150.0M",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "cpi",
        name: "Capital Plc",
        symbol: "CPI",
        exchange: "London",
        ipoValue: "N/A",
        priceRange: "N/A",
        lastPrice: "188.00",
        listingDate: "2025-04-29",
        sector: "Financial Services",
        country: "UK",
        type: "Mainline",
        description: "Capital Plc is a financial services company.",
        openDate: "2025-04-24",
        closeDate: "2025-04-26",
        lotSize: 100,
        issueSize: "N/A",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "phoe",
        name: "Phoenix Asia Holdings Ltd",
        symbol: "PHOE",
        exchange: "NASDAQ",
        ipoValue: "6.4M",
        priceRange: "4.00",
        lastPrice: "2.67",
        listingDate: "2025-04-25",
        sector: "Financial Services",
        country: "Asia",
        type: "Mainline",
        description: "Phoenix Asia Holdings Ltd is a financial services company.",
        openDate: "2025-04-20",
        closeDate: "2025-04-22",
        lotSize: 100,
        issueSize: "6.4M",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "chac",
        name: "Crane Harbor Acq Corp",
        symbol: "CHACU",
        exchange: "NASDAQ",
        ipoValue: "200.0M",
        priceRange: "10.00",
        lastPrice: "10.00",
        listingDate: "2025-04-25",
        sector: "SPAC",
        country: "USA",
        type: "Mainline",
        description: "Crane Harbor Acq Corp is a Special Purpose Acquisition Company.",
        openDate: "2025-04-20",
        closeDate: "2025-04-22",
        lotSize: 100,
        issueSize: "200.0M",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "ipcx",
        name: "Inflection Point Acq III",
        symbol: "IPCXU",
        exchange: "NASDAQ",
        ipoValue: "220.0M",
        priceRange: "10.00",
        lastPrice: "10.13",
        listingDate: "2025-04-25",
        sector: "SPAC",
        country: "USA",
        type: "Mainline",
        description: "Inflection Point Acq III is a Special Purpose Acquisition Company.",
        openDate: "2025-04-20",
        closeDate: "2025-04-22",
        lotSize: 100,
        issueSize: "220.0M",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "npac",
        name: "New Providence Acquisition Corp III",
        symbol: "NPACU",
        exchange: "NASDAQ",
        ipoValue: "261.0M",
        priceRange: "10.00",
        lastPrice: "10.07",
        listingDate: "2025-04-24",
        sector: "SPAC",
        country: "USA",
        type: "Mainline",
        description: "New Providence Acquisition Corp III is a Special Purpose Acquisition Company.",
        openDate: "2025-04-19",
        closeDate: "2025-04-21",
        lotSize: 100,
        issueSize: "261.0M",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "tvac",
        name: "Texas Ventures Acq III Corp",
        symbol: "TVACU",
        exchange: "NASDAQ",
        ipoValue: "200.0M",
        priceRange: "10.00",
        lastPrice: "10.01",
        listingDate: "2025-04-23",
        sector: "SPAC",
        country: "USA",
        type: "Mainline",
        description: "Texas Ventures Acq III Corp is a Special Purpose Acquisition Company.",
        openDate: "2025-04-18",
        closeDate: "2025-04-20",
        lotSize: 100,
        issueSize: "200.0M",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "pfai",
        name: "Pinnacle Food Group Ltd",
        symbol: "PFAI",
        exchange: "NASDAQ",
        ipoValue: "7.2M",
        priceRange: "4.00",
        lastPrice: "3.15",
        listingDate: "2025-04-22",
        sector: "Food & Beverage",
        country: "USA",
        type: "Mainline",
        description: "Pinnacle Food Group Ltd is a food and beverage company.",
        openDate: "2025-04-17",
        closeDate: "2025-04-19",
        lotSize: 100,
        issueSize: "7.2M",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      },
      {
        id: "cigl",
        name: "Concorde Int Group Ltd",
        symbol: "CIGL",
        exchange: "NASDAQ",
        ipoValue: "5.0M",
        priceRange: "4.00",
        lastPrice: "4.20",
        listingDate: "2025-04-22",
        sector: "Diversified",
        country: "USA",
        type: "Mainline",
        description: "Concorde Int Group Ltd is a diversified business group.",
        openDate: "2025-04-17",
        closeDate: "2025-04-19",
        lotSize: 100,
        issueSize: "5.0M",
        retailQuota: "35%",
        qibQuota: "50%",
        niiQuota: "15%"
      }
    ];

    setIpos(mockIpoData);
    setLoading(false);
  };

  const onCoinChange = async (e, isCoin2) => {
    setLoading(true);
    if (isCoin2) {
      const newCrypto2 = e.target.value;
      // crypto2 is being changed
      setCrypto2(newCrypto2);
      // fetch coin2 data
      const data2 = await getCoinData(newCrypto2);
      settingCoinObject(data2, setCoin2Data);
      // fetch prices again
      const prices1 = await getPrices(crypto1, days, priceType);
      const prices2 = await getPrices(newCrypto2, days, priceType);
      settingChartData(setChartData, prices1, prices2);
    } else {
      const newCrypto1 = e.target.value;
      // crypto1 is being changed
      setCrypto1(newCrypto1);
      // fetch coin1 data
      const data1 = await getCoinData(newCrypto1);
      settingCoinObject(data1, setCoin1Data);
      // fetch coin prices
      const prices1 = await getPrices(newCrypto1, days, priceType);
      const prices2 = await getPrices(crypto2, days, priceType);
      settingChartData(setChartData, prices1, prices2);
    }
    setLoading(false);
  };

  const handleDaysChange = async (e) => {
    const newDays = e.target.value;
    setLoading(true);
    setDays(newDays);
    const prices1 = await getPrices(crypto1, newDays, priceType);
    const prices2 = await getPrices(crypto2, newDays, priceType);
    settingChartData(setChartData, prices1, prices2);
    setLoading(false);
  };

  const handlePriceTypeChange = async (e) => {
    const newPriceType = e.target.value;
    setLoading(true);
    setPriceType(newPriceType);
    const prices1 = await getPrices(crypto1, days, newPriceType);
    const prices2 = await getPrices(crypto2, days, newPriceType);
    settingChartData(setChartData, prices1, prices2);
    setLoading(false);
  };

  const handleIpo1Change = (selectedOption) => {
    setSelectedIpo1(selectedOption?.value || null);
  };

  const handleIpo2Change = (selectedOption) => {
    setSelectedIpo2(selectedOption?.value || null);
  };

  const getSelectedIpoData = (ipoId) => {
    return ipos.find(ipo => ipo.id === ipoId);
  };

  return (
    <div>
      <Header />
      <div className="faq-section">
        <h2>FAQ</h2>
        <div className="faq-item">
          <h3>WHAT IS IPO?</h3>
          <p>
            An IPO, or Initial Public Offering, is a significant financial event where a privately-owned company offers its shares to the public for the first time, thereby becoming a publicly traded company. When a company decides to go public through an IPO, it typically works with investment banks and underwriters to determine the offering price and the number of shares to be issued.
          </p>
          <p>
            IPOs are often used by companies to raise capital for growth and expansion. They also provide an opportunity for early investors and company insiders to sell their shares and realize a return on their investments. However, going public comes with increased regulatory and reporting requirements, as the company is now accountable to its shareholders and the broader investing public.
          </p>
          <p>
            While an IPO can be a significant milestone for a company, providing access to capital and liquidity for its early investors, it also comes with substantial regulatory and market-related responsibilities that can impact the company's operations and long-term growth prospects. Therefore, the decision to go public is a complex one that involves careful consideration of the company's financial position, growth strategy, and readiness for public ownership.
          </p>
        </div>
      </div>
      {loading || !coin1Data?.id || !coin2Data?.id ? (
        <Loader />
      ) : (
        <>
          <SelectCoins
            allCoins={allCoins}
            crypto1={crypto1}
            crypto2={crypto2}
            onCoinChange={onCoinChange}
            days={days}
            handleDaysChange={handleDaysChange}
          />
          <div className="grey-wrapper">
            <List coin={coin1Data} />
          </div>
          <div className="grey-wrapper">
            <List coin={coin2Data} />
          </div>
          <div className="grey-wrapper">
            <ToggleComponents
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} multiAxis={true} />
          </div>
          <Info title={coin1Data.name} desc={coin1Data.desc} />
          <Info title={coin2Data.name} desc={coin2Data.desc} />
        </>
      )}
      <div className="compare-container">
        <div className="compare-heading">
          <h1>Compare IPOs</h1>
          <p>Select two IPOs to compare their details side by side</p>
        </div>
        <div className="select-flex">
          <SelectIPO
            ipos={ipos}
            onChange={handleIpo1Change}
            placeholder="Select First IPO"
          />
          <SelectIPO
            ipos={ipos}
            onChange={handleIpo2Change}
            placeholder="Select Second IPO"
            selectedIpo={selectedIpo1}
          />
        </div>
        {selectedIpo1 && selectedIpo2 && (
          <CompareTable
            ipo1={getSelectedIpoData(selectedIpo1)}
            ipo2={getSelectedIpoData(selectedIpo2)}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Compare;
