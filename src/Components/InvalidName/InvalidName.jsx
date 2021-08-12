import React, { useContext } from 'react'
import { CountryContext } from '../../context/CountryContextProvider'

function InvalidName() {
    const {closeModal} = useContext(CountryContext)
    return (
        <div className="invalid-name">
            <div className="invalid-name-container">
                <div className="invalid-name-box">
                    <div className="invalid-name-icon-box">
                        <i className="fas fa-times" onClick={closeModal}></i>
                    </div>
                    <p className="invalid-name-message">The name provided is not a valid country name.</p>
                </div>
            </div>
        </div>
    )
}

export default InvalidName
