import React, { useEffect } from "react";
import Button from "../../Common/Button";
import "./styles.css";
import backgroundImage from "../../../assets/1.jpeg";
import overlayImage from "../../../assets/2.jpeg";
import aImage from "../../../assets/a.avif";
import bImage from "../../../assets/b.avif";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";

function MainComponent() {
  useEffect(() => {
    // Load Ticker Tape Widget
    const tickerScript = document.createElement("script");
    tickerScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    tickerScript.async = true;
    tickerScript.innerHTML = JSON.stringify({
      "symbols": [
        { "proName": "FOREXCOM:SPXUSD", "title": "S&P 500 Index" },
        { "proName": "FOREXCOM:NSXUSD", "title": "US 100 Cash CFD" },
        { "proName": "FX_IDC:EURUSD", "title": "EUR to USD" },
        { "proName": "BITSTAMP:BTCUSD", "title": "Bitcoin" },
        { "proName": "BITSTAMP:ETHUSD", "title": "Ethereum" }
      ],
      "showSymbolLogo": true,
      "isTransparent": false,
      "displayMode": "compact",
      "colorTheme": "dark",
      "locale": "en"
    });

    // Load Advanced Chart Widget
    const chartScript = document.createElement("script");
    chartScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    chartScript.async = true;
    chartScript.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": "BSE:IPO",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "withdateranges": true,
      "range": "12M",
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "details": true,
      "hotlist": true,
      "show_popup_button": true,
      "popup_width": "1000",
      "popup_height": "650",
      "support_host": "https://www.tradingview.com"
    });

    const tickerContainer = document.querySelector('.ticker-tape .tradingview-widget-container__widget');
    const chartContainer = document.querySelector('.advanced-chart .tradingview-widget-container__widget');

    if (tickerContainer) tickerContainer.appendChild(tickerScript);
    if (chartContainer) chartContainer.appendChild(chartScript);

    return () => {
      if (tickerContainer && tickerScript.parentNode === tickerContainer) {
        tickerContainer.removeChild(tickerScript);
      }
      if (chartContainer && chartScript.parentNode === chartContainer) {
        chartContainer.removeChild(chartScript);
      }
    };
  }, []);

  return (
    <div className="main-flex">
      <div className="info-landing">
        <motion.h1
          className="heading1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Track IPO
        </motion.h1>
        <motion.h1
          className="heading2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Track IPOs through our comprehensive database in real time. Visit the dashboard to
          explore upcoming and listed IPOs!{" "}
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.75 }}
        >
          <a href="/dashboard">
            <Button text={"Dashboard"} />
          </a>
          <RWebShare
            data={{
              text: "IPO Insider - Your comprehensive IPO tracking platform.",
              url: "https://crypto-dashboard-jan.netlify.app",
              title: "IPO Insider.",
            }}
            onClick={() => toast.info("App Shared!")}
          >
            <Button text={"Share App"} outlined={true} />
          </RWebShare>
        </motion.div>

        <div className="widgets-container">
          <div className="ticker-tape">
            <div className="tradingview-widget-container">
              <div className="tradingview-widget-container__widget"></div>
              <div className="tradingview-widget-copyright">
                <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                  <span className="blue-text">Track all markets on TradingView</span>
                </a>
              </div>
            </div>
          </div>

          <div className="advanced-chart">
            <div className="tradingview-widget-container">
              <div className="tradingview-widget-container__widget"></div>
              <div className="tradingview-widget-copyright">
                <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                  <span className="blue-text">Track all markets on TradingView</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gradient-div">
        <img src={backgroundImage} className="gradient" alt="background" />
        <motion.img
          src={bImage}
          className="iphone"
          alt="overlay"
          style={{ display: 'block', width: '220px', borderRadius: '16px 16px 0 0', margin: '0 auto', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
        <motion.img
          src={aImage}
          alt="IPO Visual A"
          style={{ display: 'block', width: '220px', borderRadius: '0 0 16px 16px', margin: '0 auto', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
          initial={{ y: 10 }}
          animate={{ y: -10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

export default MainComponent;
