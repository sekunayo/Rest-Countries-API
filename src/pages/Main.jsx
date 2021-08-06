import React, { useContext, useState, useEffect } from 'react';
import { CountryContext } from '../context/CountryContextProvider';
import Card from '../Components/Card/Card';
import Navigation from '../Components/Navigation/Navigation';
import { Link } from "react-router-dom";

function Main() {
    let [countryList, setCountryList] = useState([]);
    const { valuer, countryType,getCurrentElement } = useContext(CountryContext);
    let [statusCode, setStatusCode] = useState('');
    async function fetchData(country) {
        try {
            let response = await fetch(`https://restcountries.eu/rest/v2/${country}`);
            let result = await response.json();
            setStatusCode(response.code);
            setCountryList(result);
        }
        catch (e) {
            console.log(e.message)
            // <ErrorMessage children={e.message} />
        }
    }

    useEffect(() => {
        fetchData(countryType);
        // if (statusCode == 404) {
        //     <ErrorMessage children="Invalid name" />
        // }
    }, [countryType, valuer])

    return (
        <>
            <Navigation />

            <div className="card-grid">
                <div className="card-grid-container">
                    {countryList.map((element, index) => {
                        return (
                            <Link to={`${element.name}`}>
                                <Card key={index + 1} name={element.name} population={element.population} element={element} region={element.region} capital={element.capital} flag={element.flag} />
                            </Link>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Main;