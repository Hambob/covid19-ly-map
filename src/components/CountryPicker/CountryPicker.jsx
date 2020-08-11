import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchAllCountries } from "../../api";

import styles from "./CountryPicker.module.css";
const CountryPicker = ({handleCountryPicker}) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchAllCountries());
    };

    fetchAPI();
  }, [setCountries]);

  return (
    <FormControl className={styles.formControl} defaultValue="" onChange={(e) => handleCountryPicker(e.target.value)}>
      <NativeSelect className="styles.nativeSelect">
        <option className="opt" value="global">global</option>
        {countries.map((country, idx) => (
          <option className="opt" key={idx} vlaue={country}>{country}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
