import { createContext, useState } from "react";
import React from 'react';


export const CountryContext = createContext();


function CountryContextProvider(props) {
    const [valuer, setValue] = useState({});
    let [countryType, setCountryType] = useState('all');
    let [currentElement, setCurrentElement] = useState('');

    const onChangeHandler = (e) => {
        setValue(e.target.value.toLowerCase());
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (valuer) {
            setCountryType(`name/${valuer}`);
        }
        else {
            setCountryType([]);
        }
        // else {
        //     // <ErrorMessage/>
        //     console.log('invalid name')
        // }
        setValue('');
    }
    const getCurrentElement = (element) => {
        setCurrentElement(element);
        console.log(element);
    }
    return (
        <CountryContext.Provider value={{ onChangeHandler, valuer , onSubmitHandler,countryType,setCountryType,getCurrentElement,currentElement}}>
            {props.children}
        </CountryContext.Provider>
    )
}

export default CountryContextProvider;
