import React from 'react';
import Select from 'react-select';

const SelectIPO = ({ ipos, onChange, placeholder, selectedIpo }) => {
  const options = ipos.map(ipo => ({
    value: ipo.id,
    label: `${ipo.name} (${ipo.symbol})`
  }));

  return (
    <div className="select-ipo-container">
      <Select
        options={options}
        onChange={onChange}
        placeholder={placeholder}
        value={selectedIpo ? options.find(option => option.value === selectedIpo) : null}
        className="ipo-select"
        classNamePrefix="select"
      />
    </div>
  );
};

export default SelectIPO; 