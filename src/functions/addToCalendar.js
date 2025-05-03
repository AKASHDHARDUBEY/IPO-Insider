import { toast } from "react-toastify";

export const addToCalendar = (ipo) => {
  try {
    // Format dates for calendar
    const startDate = new Date(ipo.openDate);
    const endDate = new Date(ipo.closeDate);
    
    // Format dates in YYYYMMDD format
    const formatDate = (date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, '');
    };

    // Create calendar event URL
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`${ipo.name} (${ipo.symbol}) IPO`)}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent(`IPO Details:
- Exchange: ${ipo.exchange}
- IPO Value: ${ipo.ipoValue}
- Price Range: ${ipo.priceRange}
- Sector: ${ipo.sector}
- Country: ${ipo.country}`)}&location=${encodeURIComponent(ipo.exchange)}`;

    // Open calendar in new tab
    window.open(calendarUrl, '_blank');
    
    toast.success(`${ipo.name} IPO added to your calendar!`);
  } catch (error) {
    console.error('Error adding to calendar:', error);
    toast.error('Failed to add to calendar. Please try again.');
  }
}; 