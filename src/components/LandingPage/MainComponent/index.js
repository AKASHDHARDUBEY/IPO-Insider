import React from "react";
import Button from "../../Common/Button";
import "./styles.css";
import backgroundImage from "../../../assets/1.jpeg";
import overlayImage from "../../../assets/2.jpeg";
import aImage from "../../../assets/a.avif";
import bImage from "../../../assets/b.avif";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";
import TradingViewWidget from "../TradingViewWidget";

function MainComponent() {
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.75 }}
        >
          <TradingViewWidget />
        </motion.div>
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
