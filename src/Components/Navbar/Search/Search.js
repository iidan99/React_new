import { useState } from "react";
import { CountryList } from "./CountryList";

const countryArr = [{ country: "Israel", areaCode: "+972" }, { country: "Usa", areaCode: "+1" }];


export const Search = () => {
    const [location, setLocation] = useState("");
    const click = () => {
        console.log(location);
    }

    const handelChange = (event) => {
        setLocation(event.target.value);
    }
    return (
        <div>
            <input placeholder="Search" value={location} onChange={handelChange}></input>
                <CountryList countrylist={countryArr}></CountryList>
            <button type="submit" onClick={click}>Find</button>
        </div>
    );

}