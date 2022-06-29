import React, { useEffect, useState } from "react";
import { MenuItem, FormControl, Select } from "@mui/material";
import InfoBox from "./InfoBox";
import "./App.css";

// STATE = How to write a variable in REACT <<<<<

//API Link for countries=> https://disease.sh/v3/covid-19/countries

// USEEFFECT = Runs a piece of code based on a given condition

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    // async -> send a request, wait for it, do something with info

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //United States, United Kingdom
            value: country.countryInfo.iso2, // UK, USA, FR
          }));

          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID 19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            {/* Loop through all the countries and show a drop down list of the options */}
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="app__stats">
        <InfoBox title="Coronavirus cases" cases={123} total={2000} />

        <InfoBox title="Recovered" cases={1234} total={3000} />

        <InfoBox title="Deaths" cases={12345} total={4000} />

      </div>

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
