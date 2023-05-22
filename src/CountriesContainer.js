import { useState, useEffect } from "react";
import Countries from "./Countries";
import VisitedCountries from "./VisitedCountries";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [vistCountry, setVisitCountry] = useState([]);
    
    const fetchCountry = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const jsonData = await response.json();

      setCountries(jsonData);
    }

    useEffect(() => {
        fetchCountry();
    }, [])

    
    return ( 
        
        <>
        <Countries countries={countries} />
        <VisitedCountries />
        </>
     );
}
 
export default CountriesContainer;