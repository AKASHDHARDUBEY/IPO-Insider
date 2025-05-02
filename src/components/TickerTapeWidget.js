import React, { useEffect, useRef } from "react";

const TickerTapeWidget = () => {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      container.current.innerHTML = "";
    }
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
        { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
        { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
        { proName: "AMEX:IPO", description: "" },
        { proName: "AQUISUK:IPOL", description: "" },
        { proName: "BSE:IPO", description: "" },
        { proName: "LSE:IPO", description: "" },
        { proName: "XETR:IPOK", description: "" }
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en"
    });
    if (container.current) {
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" style={{ margin: "24px 0" }}>
      <div ref={container} className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TickerTapeWidget; 