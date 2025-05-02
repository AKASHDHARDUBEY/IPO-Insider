import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./styles.css";
import Grid from "../Grid";
import List from "../List";
import { convertNumber } from "../../../functions/convertNumber";
import Button from "../../Common/Button";

export default function TabsComponent({ ipos, setSearch }) {
  const [value, setValue] = React.useState("list");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    "& .Mui-selected": {
      color: "var(--blue) !important",
    },
    fontFamily: "Inter,sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
  };

  return (
    <TabContext value={value}>
      <div style={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="List" value="list" sx={style} />
          <Tab label="Grid" value="grid" sx={style} />
        </TabList>
      </div>
      <TabPanel value="list">
        <div className="table-container">
          <table className="list-flex">
            <thead>
              <tr>
                <th>IPO Listing</th>
                <th>Company</th>
                <th>Exchange</th>
                <th>IPO Value</th>
                <th>IPO Price</th>
                <th>Last</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {ipos.length > 0 ? (
                ipos.map((ipo, i) => (
                  <List ipo={ipo} key={i} delay={(i % 8) * 0.2} />
                ))
              ) : (
                <tr>
                  <td colSpan="7">
                    <div className="no-results">
                      <h1>Sorry, Couldn't find the IPO you're looking for 😞</h1>
                      <div className="clear-search">
                        <Button text="Clear Search" onClick={() => setSearch("")} />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </TabPanel>
      <TabPanel value="grid">
        <div className="grid-flex">
          {ipos.length > 0 ? (
            ipos.map((ipo, i) => (
              <Grid ipo={ipo} key={i} delay={(i % 4) * 0.2} />
            ))
          ) : (
            <div className="no-results">
              <h1>Sorry, Couldn't find the IPO you're looking for 😞</h1>
              <div className="clear-search">
                <Button text="Clear Search" onClick={() => setSearch("")} />
              </div>
            </div>
          )}
        </div>
      </TabPanel>
    </TabContext>
  );
}
