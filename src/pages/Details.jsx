import React, { useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { CountryContext } from '../context/CountryContextProvider';
import Header from '../Components/Header/Header'

function Details() {
    const history = useHistory();
    const { currentElement } = useContext(CountryContext);


    return (
        <>
            <Header/>
            <div className="details">
                <div className="details-container">
                    <div className="details-button-container">
                        <button className="go-back-button" onClick={() => history.goBack()} ><i class="fas fa-long-arrow-alt-left"></i>Back</button>
                    </div>
                    <div className="details-box">
                        <div className="details-box-image">
                            <img src={currentElement?.flag} alt="details_flag" />
                        </div>
                        <div className="details-box-description">
                            <div className="details-box-description-container">
                                <h3>{currentElement?.name}</h3>
                                <div className="details-box-description-text">
                                    <div className="details-box-description-text-1">
                                        <p>Native Name: <span>{currentElement?.name}</span></p>
                                        <p>Population: <span>{currentElement?.population}</span></p>
                                        <p>Region: <span>{currentElement?.region}</span></p>
                                        <p>Sub Region: <span>{currentElement?.subregion}</span></p>
                                        <p>Capital: <span>{currentElement?.capital}</span></p>
                                    </div>
                                    <div className="details-box-description-text-2">
                                        <p>Top Level Domain: {currentElement.topLevelDomain.map((element, index) => {
                                            return (<span key={index + 1}>{element}</span>);
                                        })}</p>
                                        <p>Currencies: {currentElement.currencies.map((element, index) => {
                                            return (<span key={index + 1}>{element?.name}</span>);
                                        })}</p>
                                        <p>Languages: {currentElement.languages.map((element, index) => {
                                            return (<span key={index + 1}>{element?.name}</span>);
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
        </>
    )
}

export default Details
