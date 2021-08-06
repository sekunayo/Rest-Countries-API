import React,{useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { CountryContext } from '../context/CountryContextProvider';


function Details() {
    const { currentElement } = useContext(CountryContext);

    console.log(currentElement);
    return (
        <div className="details">
            <div className="details-container">
                <div className="details-button-container">
                    <Link to="/">
                        <button className="go-back-button"><i class="fas fa-long-arrow-alt-left"></i>Back</button>
                    </Link>
                </div>
                <div className="details-box">
                    <div className="details-box-image">
                        <p>aaaa</p>
                        <img src={currentElement.flag} alt="details_flag" />
                    </div>
                    <div className="details-box-description">
                        <div className="details-box-description-container">
                            <h3>Belgium</h3>
                            <div className="details-box-description-text">
                                <div className="details-box-description-text-1">
                                    <p>Native Name: <span>{currentElement.name}</span></p>
                                    <p>Population: <span>{currentElement.population}</span></p>
                                    <p>Region: <span>{currentElement.region}</span></p>
                                    <p>Sub Region: <span>{currentElement.subregion}</span></p>
                                    <p>Capital: <span>{currentElement.capital}</span></p>
                                </div>
                                <div className="details-box-description-text-2">
                                    <p>Top Level Domain: {currentElement.topLevelDomain.map(element => {
                                        return (<span>{element}</span>);
                                    })}</p>
                                    <p>Currencies: {currentElement.currencies.map(element => {
                                        return (<span>{element.name}</span>);
                                    })}</p>
                                    <p>Languages: {currentElement.languages.map(element => {
                                        return (<span>{element.name}</span>);
                                    })}</p>
                                </div>
                            </div>
                        </div>

                        <div className="details-box-description-footer">
                            <div className="details-box-description-footer-container">
                                Border Countries:
                               <div className="border-country-container">
                                {currentElement.borders.map(element => {
                                    return (<div className="border-country"><p>{element}</p></div>);
                                })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
