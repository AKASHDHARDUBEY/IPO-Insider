import React from 'react';

const CompareTable = ({ ipo1, ipo2 }) => {
  const fields = [
    { label: 'Company Name', key: 'name' },
    { label: 'Symbol', key: 'symbol' },
    { label: 'Exchange', key: 'exchange' },
    { label: 'IPO Value', key: 'ipoValue' },
    { label: 'Price Range', key: 'priceRange' },
    { label: 'Listing Date', key: 'listingDate' },
    { label: 'Sector', key: 'sector' },
    { label: 'Country', key: 'country' },
    { label: 'Type', key: 'type' },
    { label: 'Lot Size', key: 'lotSize' },
    { label: 'Issue Size', key: 'issueSize' },
    { label: 'Retail Quota', key: 'retailQuota' },
    { label: 'QIB Quota', key: 'qibQuota' },
    { label: 'NII Quota', key: 'niiQuota' }
  ];

  return (
    <div className="compare-table-container">
      <table className="compare-table">
        <thead>
          <tr>
            <th>Field</th>
            <th>{ipo1.name}</th>
            <th>{ipo2.name}</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field) => (
            <tr key={field.key}>
              <td>{field.label}</td>
              <td>{ipo1[field.key]}</td>
              <td>{ipo2[field.key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompareTable; 