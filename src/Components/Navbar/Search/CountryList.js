import { Country } from "./Country";


export const CountryList = (props) => {

    const country = props.countrylist;

    return (
        <div>
            {country.map((result, idx)=>
            <Country key={idx} country={result.country} areacode={result.areaCode}></Country>
            )}
            {/* <Country></Country> */}
        </div>
    )

}