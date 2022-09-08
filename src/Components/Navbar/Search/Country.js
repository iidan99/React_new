import React from "react";
import "./Country.css";

export const Country = (props) =>{

    console.log(props);
    return (
    
        <div className="test">
                <p>{props.country}</p>
                <p>{props.areacode}</p>
        </div>
    )
}