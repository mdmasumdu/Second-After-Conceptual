import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = () => {

    const [countries,SetCountries] =useState([])
    useEffect(()=>{

        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data =>SetCountries(data))
    },[])
    return (
        <div>
            <h1>Data:{countries.length}</h1>
    {
        countries.map(country=><Country key={country?.cca2} country={country}></Country>)
    }
            
        </div>
    );
};

export default Countries;