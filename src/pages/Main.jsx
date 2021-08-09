import React, { useContext, useState, useEffect } from 'react';
import { CountryContext } from '../context/CountryContextProvider';
import Card from '../Components/Card/Card';
import Navigation from '../Components/Navigation/Navigation';
import { Link } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import InvalidName from '../Components/InvalidName/InvalidName';
// import ErrorMessage fro../Components/ErrorMessage/abage';
function Main() {
    let [countryList, setCountryList] = useState([]);
    const { valuer, countryType} = useContext(CountryContext);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(false);
    let [errorMessage, setErrorMessage] = useState('');
    async function fetchData(country) {
        try {
            let response = await fetch(`https://restcountries.eu/rest/v2/${country}`);
            if (response.ok) {
                let result = await response.json();
                setLoading(false);
                setCountryList(result);
                setError(false);
            }
            else {
                setError(true);
                console.log("errrr")
            }
        }
        catch (e) {
            setError(true);
            setErrorMessage(e.message);
        }
    }
    const closeModal = () => {
        setError(false);
    }

    useEffect(() => {
        fetchData(countryType);

    }, [countryType, valuer])

    
    return (
        <>
            <Navigation />
            {loading ? <Loader /> :
                <div className="card-grid">
                    <div className="card-grid-container">
                        {countryList.map((element, index) => {
                            return (
                                <Link to={`${element.name}`} className="links">
                                    <Card key={index + 1} name={element.name} population={element.population} element={element} region={element.region} capital={element.capital} flag={element.flag} />
                                </Link>
                            )
                        })
                        }
                    </div>
                </div>
            }
            {/* {error && <InvalidName closeModal={closeModal} children="This country does not exist. Kindly input a valid country name" />} */}


        </>
    )
}

export default Main;