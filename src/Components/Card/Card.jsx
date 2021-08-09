import React, { useContext } from 'react'
import { CountryContext } from '../../context/CountryContextProvider'
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';

function Card({ population, region, capital, flag, name,element }) {
    const { getCurrentElement } = useContext(CountryContext);
    return (
        <div className="card" onClick={() => getCurrentElement(element)}>
            <div className="card-image">
                <img alt="card-country" src={flag}></img>
            </div>
            <div className="card-text">
                <h3 className="card-text-title">{name}</h3>
                <div className="card-text-inner">
                    <p>Population: <span>{population}</span></p>
                    <p>Region: <span>{region}</span></p>
                    <p>Capital: <span>{capital}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Card
