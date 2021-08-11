import { createContext, useState, useEffect } from "react";
import React from 'react';


export const CountryContext = createContext();


function CountryContextProvider(props) {
    const [valuer, setValuer] = useState({});
    let [countryType, setCountryType] = useState('all');
    let [currentElement, setCurrentElement] = useState([{}]);
    let [error, setError] = useState(false);
    let [loader, setLoader] = useState(true);
    let [countryList, setCountryList] = useState([]);

    async function fetchData(country) {
        try {
            let response = await fetch(`https://restcountries.eu/rest/v2/${country}`);
            if (response.ok) {
                let result = await response.json();
                setLoader(false);
                setCountryList(result);
                setError(false);
            }
            else {
                setError(true);
            }
        }
        catch (e) {
            setError(true);
        }
    }

    useEffect(() => {
        fetchData(countryType);
    }, [countryType])

    // useEffect(() => {
    //     let data = localStorage.getItem("currentElement");
    //     if (data) {
    //         data = JSON.parse(localStorage.getItem("currentElement"));
    //     }
    //     setCurrentElement(data);
    // }, [])

    const onChangeHandler = (e) => {
        const targetValue = e.target.value;
        const firstLetter = targetValue.slice(0, 1).toUpperCase();
        const newTargetValue = firstLetter + targetValue.slice(1);
        setValuer(newTargetValue);
    }
    const onSubmitHandler = (element) => (e) => {
        e.preventDefault();
        const doesCountryExist = countryList.every(element => element.name === valuer);
        if (doesCountryExist) {
            const eachCountry = countryList.filter(element => element.name === valuer);
            setCountryList(eachCountry);
        }
        else {
            setError(true);
        }
    }
    const getCurrentElement = (element) => {
        // localStorage.setItem('currentElement', JSON.stringify(element));
        setCurrentElement(element);

    }

    return (
        <CountryContext.Provider value={{ onChangeHandler, countryList, countryType, loader, valuer, error, onSubmitHandler, getCurrentElement, setCountryType, currentElement }}>
            {props.children}
        </CountryContext.Provider>
    )
}

export default CountryContextProvider;
