import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { CountryContext } from '../../context/CountryContextProvider';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';


function CardContainer() {
    const { loader, countryList } = useContext(CountryContext);
    return (
        <>
            {loader ? <Loader /> :
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
        </>
    )
}

export default CardContainer;
