import React, { useState } from "react";
import "./styles.css";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { motion } from "framer-motion";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { saveItemToWatchlist } from "../../../functions/saveItemToWatchlist";
import { removeItemToWatchlist } from "../../../functions/removeItemToWatchlist";
import { addToCalendar } from "../../../functions/addToCalendar";

function Grid({ ipo, delay }) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isIpoAdded, setIsIpoAdded] = useState(watchlist?.includes(ipo.id));

  const handleAddToCalendar = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCalendar(ipo);
  };

  const handleSetReminder = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Implement reminder functionality
    console.log("Set reminder for:", ipo);
  };

  return (
    <a href={`/ipo/${ipo.id}`}>
      <motion.div
        className="grid"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <div className="img-flex">
          <div className="icon-flex">
            <div className="info-flex">
              <p className="ipo-symbol">{ipo.symbol}</p>
              <p className="ipo-name">{ipo.name}</p>
            </div>
            <div
              className="watchlist-icon"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (isIpoAdded) {
                  removeItemToWatchlist(e, ipo.id, setIsIpoAdded);
                } else {
                  setIsIpoAdded(true);
                  saveItemToWatchlist(e, ipo.id);
                }
              }}
            >
              {isIpoAdded ? <StarIcon /> : <StarOutlineIcon />}
            </div>
          </div>
        </div>
        
        <div className="ipo-details">
          <p className="ipo-info">
            <strong>Exchange:</strong> {ipo.exchange}
          </p>
          <p className="ipo-info">
            <strong>IPO Value:</strong> {ipo.ipoValue}
          </p>
          <p className="ipo-info">
            <strong>Price Range:</strong> {ipo.priceRange}
          </p>
          <p className="ipo-info">
            <strong>Last Price:</strong> {ipo.lastPrice}
          </p>
          <p className="ipo-info">
            <strong>Listing Date:</strong> {ipo.listingDate}
          </p>
          <p className="ipo-info">
            <strong>Sector:</strong> {ipo.sector}
          </p>
          <p className="ipo-info">
            <strong>Country:</strong> {ipo.country}
          </p>
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
      </motion.div>
    </a>
  );
}

export default Grid;
