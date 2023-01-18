import React, {useState } from 'react';
import useDebounce from '../CustomHooks/useDebounce';

const Search = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debounceChange = useDebounce(onChange, 500);

  function handleChange({ target }) {
    setDisplayValue(target.value);
    debounceChange(target.value);
  }

  return (
    <input
      type="search"
      value={displayValue}
      placeholder="Pesquise..."
      onChange={handleChange}
    />
  );
};

export default Search;
