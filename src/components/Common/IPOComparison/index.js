import React, { useState } from 'react';
import './styles.css';

const IPOComparison = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const ipoData = [
    {
      name: "Tankup Engineers IPO (SME)",
      listingDate: "30 Apr 25",
      issuePrice: "₹ 140",
      totalSubs: "116.17x",
      listingOpen: "175",
      listingClose: "183.75",
      listingGain: "25.00%",
      ltp: "₹ 174.60",
      asOf: "-",
      todaysGain: "-0.23%",
      issueSize: "19.53 Cr"
    },
    {
      name: "Infonative Solutions IPO (SME)",
      listingDate: "08 Apr 25",
      issuePrice: "₹ 79",
      totalSubs: "4.35x",
      listingOpen: "-",
      listingClose: "-",
      listingGain: "-",
      ltp: "₹ 37.25",
      asOf: "-",
      todaysGain: "-",
      issueSize: "24.71 Cr"
    },
    {
      name: "Spinaroo Commercial IPO (SME)",
      listingDate: "08 Apr 25",
      issuePrice: "₹ 51",
      totalSubs: "1.49x",
      listingOpen: "-",
      listingClose: "-",
      listingGain: "-",
      ltp: "₹ 77.59",
      asOf: "-",
      todaysGain: "-",
      issueSize: "10.17 Cr"
    },
    {
      name: "Aten Papers and Foam Ltd IPO (Mainline)",
      listingDate: "07 Apr 25",
      issuePrice: "₹ 96",
      totalSubs: "-",
      listingOpen: "-",
      listingClose: "-",
      listingGain: "-",
      ltp: "-",
      asOf: "-",
      todaysGain: "-",
      issueSize: "22.19 Cr"
    },
    {
      name: "Retaggio Industries IPO (SME)",
      listingDate: "07 Apr 25",
      issuePrice: "₹ 25",
      totalSubs: "1.78x",
      listingOpen: "-",
      listingClose: "-",
      listingGain: "-",
      ltp: "₹ 21.58",
      asOf: "-",
      todaysGain: "-",
      issueSize: "15.50 Cr"
    },
    {
      name: "Identixweb IPO (SME)",
      listingDate: "03 Apr 25",
      issuePrice: "₹ 54",
      totalSubs: "24.4x",
      listingOpen: "-",
      listingClose: "-",
      listingGain: "-",
      ltp: "₹ 64.00",
      asOf: "-",
      todaysGain: "-",
      issueSize: "16.63 Cr"
    },
    {
      name: "Shri Ahimsa Naturals IPO (SME)",
      listingDate: "02 Apr 25",
      issuePrice: "₹ 119",
      totalSubs: "58.38x",
      listingOpen: "140",
      listingClose: "147",
      listingGain: "17.65%",
      ltp: "₹ 153.05",
      asOf: "-",
      todaysGain: "9.32%",
      issueSize: "73.81 Cr"
    },
    {
      name: "ATC Energies System IPO (SME)",
      listingDate: "02 Apr 25",
      issuePrice: "₹ 118",
      totalSubs: "1.58x",
      listingOpen: "107",
      listingClose: "101.65",
      listingGain: "-9.32%",
      ltp: "₹ 103.25",
      asOf: "-",
      todaysGain: "-3.50%",
      issueSize: "63.76 Cr"
    },
    {
      name: "Desco Infratech IPO (SME)",
      listingDate: "01 Apr 25",
      issuePrice: "₹ 150",
      totalSubs: "77.74x",
      listingOpen: "-",
      listingClose: "-",
      listingGain: "-",
      ltp: "₹ 258.30",
      asOf: "-",
      todaysGain: "-",
      issueSize: "30.75 Cr"
    },
    {
      name: "Rapid Fleet Management Services IPO (SME)",
      listingDate: "28 Mar 25",
      issuePrice: "₹ 192",
      totalSubs: "1.49x",
      listingOpen: "195",
      listingClose: "200.9",
      listingGain: "1.56%",
      ltp: "₹ 206.85",
      asOf: "-",
      todaysGain: "6.08%",
      issueSize: "43.87 Cr"
    },
    {
      name: "Active Infrastructures IPO (SME)",
      listingDate: "28 Mar 25",
      issuePrice: "₹ 181",
      totalSubs: "1.05x",
      listingOpen: "181",
      listingClose: "175.6",
      listingGain: "0.00%",
      ltp: "₹ 170.10",
      asOf: "-",
      todaysGain: "-6.02%",
      issueSize: "77.83 Cr"
    },
    {
      name: "Grand Continent Hotels IPO (SME)",
      listingDate: "27 Mar 25",
      issuePrice: "₹ 113",
      totalSubs: "1.74x",
      listingOpen: "112.9",
      listingClose: "107.25",
      listingGain: "-0.09%",
      ltp: "₹ 163.10",
      asOf: "-",
      todaysGain: "44.46%",
      issueSize: "74.46 Cr"
    },
    {
      name: "Paradeep Parivahan IPO (SME)",
      listingDate: "24 Mar 25",
      issuePrice: "₹ 98",
      totalSubs: "1.64x",
      listingOpen: "-",
      listingClose: "-",
      listingGain: "-",
      ltp: "₹ 99.00",
      asOf: "-",
      todaysGain: "-",
      issueSize: "44.86 Cr"
    },
    {
      name: "Divine Hira Jewellers IPO (SME)",
      listingDate: "24 Mar 25",
      issuePrice: "₹ 90",
      totalSubs: "0.13x",
      listingOpen: "90",
      listingClose: "85.5",
      listingGain: "0.00%",
      ltp: "₹ 50.85",
      asOf: "-",
      todaysGain: "-43.50%",
      issueSize: "31.84 Cr"
    },
    {
      name: "Super Iron Foundry IPO (SME)",
      listingDate: "19 Mar 25",
      issuePrice: "₹ 108",
      totalSubs: "1.54x",
      listingOpen: "-",
      listingClose: "-",
      listingGain: "-",
      ltp: "₹ 37.13",
      asOf: "-",
      todaysGain: "-",
      issueSize: "68.05 Cr"
    },
    {
      name: "PDP Shipping and Projects IPO (SME)",
      listingDate: "18 Mar 25",
      issuePrice: "₹ 135",
      totalSubs: "1.01x",
      listingOpen: "-",
      listingClose: "-",
      listingGain: "-",
      ltp: "₹ 89.00",
      asOf: "-",
      todaysGain: "-",
      issueSize: "12.65 Cr"
    },
    {
      name: "NAPS Global India IPO (SME)",
      listingDate: "11 Mar 25",
      issuePrice: "₹ 90",
      totalSubs: "1.18x",
      listingOpen: "-",
      listingClose: "-",
      listingGain: "-",
      ltp: "₹ 50.50",
      asOf: "-",
      todaysGain: "-",
      issueSize: "11.88 Cr"
    },
    {
      name: "Balaji Phosphates IPO (SME)",
      listingDate: "07 Mar 25",
      issuePrice: "₹ 70",
      totalSubs: "1.2x",
      listingOpen: "75",
      listingClose: "74.35",
      listingGain: "7.14%",
      ltp: "₹ 138.65",
      asOf: "-",
      todaysGain: "84.87%",
      issueSize: "50.11 Cr"
    },
    {
      name: "Shreenath Paper Products IPO (SME)",
      listingDate: "05 Mar 25",
      issuePrice: "₹ 44",
      totalSubs: "1.81x",
      listingOpen: "-",
      listingClose: "-",
      listingGain: "-",
      ltp: "₹ 16.39",
      asOf: "-",
      todaysGain: "-",
      issueSize: "23.36 Cr"
    },
    {
      name: "Nukleus Office Solutions IPO (SME)",
      listingDate: "04 Mar 25",
      issuePrice: "₹ 234",
      totalSubs: "1.27x",
      listingOpen: "-",
      listingClose: "-",
      listingGain: "-",
      ltp: "₹ 200.25",
      asOf: "-",
      todaysGain: "-",
      issueSize: "24.92 Cr"
    }
  ];

  // IPO Performance 2025 data
  const ipoPerformance2025 = [
    {
      name: "Quality Power Electrical Equipments Limited",
      listingGain: "-8.73%",
      todaysGain: "-18.21%"
    },
    {
      name: "Hexaware Technologies Limited",
      listingGain: "7.7%",
      todaysGain: "-1.02%"
    },
    {
      name: "Ajax Engineering Limited",
      listingGain: "-5.34%",
      todaysGain: "3.53%"
    },
    {
      name: "Dr. Agarwal's Health Care Limited",
      listingGain: "-0.09%",
      todaysGain: "-12.14%"
    },
    {
      name: "Denta Water and Infra Solutions Limited",
      listingGain: "16.07%",
      todaysGain: "-2.86%"
    },
    {
      name: "Stallion India Fluorochemicals Limited",
      listingGain: "40%",
      todaysGain: "-23.93%"
    },
    {
      name: "Laxmi Dental Limited",
      listingGain: "28.63%",
      todaysGain: "-9.36%"
    },
    {
      name: "Capital Infra Trust",
      listingGain: "0.02%",
      todaysGain: "-10.43%"
    },
    {
      name: "Quadrant Future Tek Limited",
      listingGain: "53.1%",
      todaysGain: "59.17%"
    },
    {
      name: "Standard Glass Lining Technology Limited",
      listingGain: "16.68%",
      todaysGain: "-2.39%"
    },
    {
      name: "Indo Farm Equipment Limited",
      listingGain: "29.21%",
      todaysGain: "-30.19%"
    }
  ];

  return (
    <div className="ipo-comparison-container">
      <button 
        className="ipo-comparison-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        IPO Comparison
      </button>
      
      {isOpen && (
        <div className="ipo-comparison-modal">
          <div className="ipo-comparison-content">
            <h2>IPO Comparison Data</h2>
            <div className="ipo-comparison-tabs">
              <button
                className={activeTab === 'all' ? 'active' : ''}
                onClick={() => setActiveTab('all')}
              >
                All IPOs
              </button>
              <button
                className={activeTab === 'performance' ? 'active' : ''}
                onClick={() => setActiveTab('performance')}
              >
                IPO Performance 2025
              </button>
            </div>
            <div className="ipo-comparison-table-container">
              {activeTab === 'all' ? (
                <table className="ipo-comparison-table">
                  <thead>
                    <tr>
                      <th>Company Name</th>
                      <th>Listing Date</th>
                      <th>Issue Price</th>
                      <th>Listing Close (₹)</th>
                      <th>Listing Gain</th>
                      <th>LTP (₹)</th>
                      <th>Todays Gain</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ipoData.map((ipo, index) => (
                      <tr key={index}>
                        <td>{ipo.name}</td>
                        <td>{ipo.listingDate}</td>
                        <td>{ipo.issuePrice}</td>
                        <td>{ipo.listingClose}</td>
                        <td>{ipo.listingGain}</td>
                        <td>{ipo.ltp}</td>
                        <td>{ipo.todaysGain}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="ipo-comparison-table">
                  <thead>
                    <tr>
                      <th>Company Name</th>
                      <th>Listing Day Gain / Loss</th>
                      <th>Current Gain / Loss</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ipoPerformance2025.map((ipo, index) => (
                      <tr key={index}>
                        <td>{ipo.name}</td>
                        <td>{ipo.listingGain}</td>
                        <td>{ipo.todaysGain}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <button 
              className="close-button"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
            <div className="ipo-faq-section">
              <h2>FAQ</h2>
              <details>
                <summary>What is an IPO?</summary>
                <div>
                  An initial public offering (IPO) is a procedure by which private companies sell their shares to public investors through a book-building process. Investors will bid to buy shares within a price band, and based on the highest number of bids received at a particular price, the issue price will be determined.
                </div>
              </details>
              <details>
                <summary>How does an IPO work?</summary>
                <div>
                  During an IPO, the company typically hires investment banks to underwrite the offering. They help determine the initial share price, handle regulatory requirements, and market the shares to potential investors.
                </div>
              </details>
              <details>
                <summary>What are the key stages of an IPO?</summary>
                <div>
                  The key stages include preparation (due diligence, financial disclosures), filing (submitting registration documents to regulators), marketing (roadshows to attract investors), pricing (setting the initial share price), and trading (shares listed and traded on a stock exchange).
                </div>
              </details>
              <details>
                <summary>What type of investors can participate in an IPO?</summary>
                <div>
                  QIBs are the registered institutional investors that directly apply in the Qualified Institutional Bidders category.<br/>
                  HNIs are investors who apply for shares in an IPO worth above Rs 2 lakh and come under non individual investor (or HNI) category.<br/>
                  Retail investors are individuals who apply for shares less than Rs 2 lakh in an IPO.
                </div>
              </details>
              <details>
                <summary>How can I apply for an IPO?</summary>
                <div>
                  Investors should have a demat account with their broker. If you have a demat account, you can look for the IPO section in your demat account and select the company in which you want to invest in. Based on the amount you bid for, you will be classified either as a retail or HNI investor. Remember, the value of the shares for which you have placed bids in an IPO will be blocked from your account till the allotment of shares is completed. If you are allotted shares in the IPO, then any balance amount will be unblocked or credited into your account.
                </div>
              </details>
              <details>
                <summary>How does the IPO allotment process work?</summary>
                <div>
                  <b>Retail Individual Investor (RII) Category:</b> Retail investors can bid for shares up to ₹2,00,000. Shares are allotted through a lottery system if the IPO is oversubscribed in this category. Each eligible applicant has an equal chance of receiving at least one lot, regardless of when the application was submitted, provided the application is valid.<br/>
                  <b>High Net-Worth Individual (HNI):</b> Investors who bid for shares worth more than ₹2,00,000 fall under this category. Allotment in the HNI category is done on a proportionate basis, i.e., in proportion to the amount of the bid. For example, if you apply for 1% of the total shares available in this category, you will receive 1% of the shares allotted to HNIs.<br/>
                  <b>General Notes:</b><br/>
                  <b>Oversubscription:</b> If an IPO is heavily oversubscribed, the chances of allotment in the RII category decrease, and it is purely based on a random lottery.<br/>
                  <b>Application Modes:</b> Investors can apply through ASBA (Applications Supported by Blocked Amount) via their banks or through online platforms provided by brokers.
                </div>
              </details>
              <details>
                <summary>Which are the Open IPOs?</summary>
                <div>
                  The current Open IPOs are Wagons Learning Ltd IPO
                </div>
              </details>
              <details>
                <summary>Which are the Upcoming IPOs?</summary>
                <div>
                  The list of Upcoming IPOs in the coming weeks are Manoj Jewellers Ltd IPO, Srigee DLM Ltd IPO
                </div>
              </details>
              <details>
                <summary>Which are the recently listed IPOs?</summary>
                <div>
                  The recently listed IPOs are Tankup Engineers IPO, Infonative Solutions IPO, Spinaroo Commercial IPO
                </div>
              </details>
              <details>
                <summary>Who can invest in an IPO?</summary>
                <div>
                  IPOs are typically open to institutional investors (like mutual funds and pension funds) and individual investors (retail investors) who meet the minimum investment requirements set by the underwriters.
                </div>
              </details>
              <details>
                <summary>What is the role of registrar of an IPO?</summary>
                <div>
                  The registrar of an IPO issue is responsible for processing IPO applications, allocating the shares per SEBI rules, processing refunds, and transferring allocated shares to investors' demat accounts.
                </div>
              </details>
              <details>
                <summary>What is Follow on public offering or FPO?</summary>
                <div>
                  A follow-on public offer (FPO) is the process through which a company already listed on the stock exchanges issues more shares publicly to raise additional capital. All public issues made after a successful Initial Public Offering are termed FPOs
                </div>
              </details>
              <details>
                <summary>What is primary & secondary market?</summary>
                <div>
                  Primary market is the market where investors can buy shares directly from the issuer company to raise their capital. Secondary market is the market where stocks are traded after they are initially offered to the investor in primary market (IPO's etc.) and get listed to stock exchange.
                </div>
              </details>
              <details>
                <summary>What is the difference between Book Building Issue and Fixed Price Issue?</summary>
                <div>
                  Initial Public Offering can be made through the fixed price method, book building method or a combination of both. Difference between shares offered through book building and offer of shares through normal public issue.
                </div>
              </details>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IPOComparison; 