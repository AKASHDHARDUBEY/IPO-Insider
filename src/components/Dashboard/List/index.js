import React, { useState } from "react";
import "./styles.css";
import { motion } from "framer-motion";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { saveItemToWatchlist } from "../../../functions/saveItemToWatchlist";
import { removeItemToWatchlist } from "../../../functions/removeItemToWatchlist";

function List({ ipo, delay }) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isIpoAdded, setIsIpoAdded] = useState(watchlist?.includes(ipo.id));

  const handleAddToCalendar = (e) => {
    e.preventDefault();
    // Implement calendar integration
    console.log("Add to calendar:", ipo);
  };

  const handleSetReminder = (e) => {
    e.preventDefault();
    // Implement reminder functionality
    console.log("Set reminder for:", ipo);
  };

  return (
    <motion.tr
      className="list-row"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <td className="listing-date">
        {new Date(ipo.listingDate).toLocaleDateString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric'
        })}
      </td>
      <td className="company-info">
        <div className="company-name-wrapper">
          <span className="company-name">{ipo.name}</span>
          <span className="company-symbol">({ipo.symbol})</span>
          {ipo.type && <span className={`ipo-type ${ipo.type.toLowerCase()}`}>{ipo.type}</span>}
        </div>
      </td>
      <td className="exchange">{ipo.exchange}</td>
      <td className="ipo-value">{ipo.ipoValue}</td>
      <td className="price-range">{ipo.priceRange}</td>
      <td className="last-price">{ipo.lastPrice}</td>
      <td className="actions">
        <div className="action-buttons">
          <button 
            className="calendar-button"
            onClick={handleAddToCalendar}
            title="Add to Calendar"
          >
            <CalendarTodayIcon />
          </button>
          <button 
            className="reminder-button"
            onClick={handleSetReminder}
            title="Set Reminder"
          >
            <NotificationsIcon />
          </button>
          <button
            className="watchlist-button"
            onClick={(e) => {
              e.preventDefault();
              if (isIpoAdded) {
                removeItemToWatchlist(e, ipo.id, setIsIpoAdded);
              } else {
                setIsIpoAdded(true);
                saveItemToWatchlist(e, ipo.id);
              }
            }}
            title={isIpoAdded ? "Remove from Watchlist" : "Add to Watchlist"}
          >
            {isIpoAdded ? <StarIcon /> : <StarOutlineIcon />}
          </button>
        </div>
      </td>
    </motion.tr>
  );
}

export default List;
