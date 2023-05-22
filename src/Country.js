const Country = ({country, visitCountry}) => {

    const button =document.querySelector("button");

    button.addEventListener((e) => {
        e.preventDefault();
        console.log("hello world!");
    })
    return ( 
        <>
        <li>
            <p>Name:{country.name.common}</p>
            <p>Continent:{country.region}</p>
            <p>Flag:{country.flag}</p>
            <button>Visit!</button>
        </li> 

        </>
     );
}
 
export default Country;