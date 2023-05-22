import Country from "./Country";

const Countries = ({countries, visitCountry}) => {

    const showCountries = countries.map((country, index) =>
        <Country key={index} country={country}/>
    )


    return (
        <>
        <h2>Countries: </h2>
        <ul>
            {showCountries}
        </ul>
        </>
     );
}
 
export default Countries;