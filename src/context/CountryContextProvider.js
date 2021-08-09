import { createContext, useEffect, useState } from "react";
import React from 'react';


export const CountryContext = createContext();


function CountryContextProvider(props) {
    const [valuer, setValuer] = useState({});
    let [countryType, setCountryType] = useState('all');
    let [currentElement, setCurrentElement] = useState({});

    useEffect(() => {
        let data = localStorage.getItem("currentElement");
        if (data) {
            data = JSON.parse(localStorage.getItem("currentElement"));
        }
        setCurrentElement(data);
    }, [])

    const onChangeHandler = (e) => {
        setValuer(e.target.value.toLowerCase());
    }
    const onSubmitHandler = (element) => (e) => { 
        e.preventDefault();
        if (valuer) {
            setCountryType(`name/${valuer}`);
        }
        else {
            setCountryType([]);
        }
        element.current.value = '';
    }
    const getCurrentElement = (element) => {
        localStorage.setItem('currentElement', JSON.stringify(element));
        setCurrentElement(element);

    }
    return (
        <CountryContext.Provider value={{ onChangeHandler, valuer , onSubmitHandler,countryType,setCountryType,getCurrentElement,currentElement}}>
            {props.children}
        </CountryContext.Provider>
    )
}

export default CountryContextProvider;
