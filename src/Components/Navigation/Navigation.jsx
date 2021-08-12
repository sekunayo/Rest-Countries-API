import React, { useContext, useState, useRef } from 'react';
import { CountryContext } from '../../context/CountryContextProvider';
import RegionListItem from '../RegionListItem/RegionListItem';

function Navigation() {
    const [showText, setShowText] = useState(false);
    const clickHandler = () => {
        setShowText(!showText);
    }
    let countries = ['all','africa', 'america', 'asia', 'europe', 'oceania'];
    const { onChangeHandler, onSubmitHandler,onKeyUpHandler } = useContext(CountryContext);
    const searchInput = useRef(null);
    return (
        <nav className="nav">
            <div className="nav-box">
                <form className="nav-search-form" onSubmit={onSubmitHandler(searchInput)}>
                    <input type="text" ref={searchInput} placeholder="Search for a country" onKeyUp={onKeyUpHandler} onChange={onChangeHandler}>
                    </input>
                    <i className="fas fa-search" onClick={onSubmitHandler(searchInput)}></i>
                </form>
                <div className="nav-select">
                    <div className="nav-select-box">
                        <p>Filter by Region</p>
                        <div className="nav-select-box-icon" onClick={clickHandler}>
                            <i className="fas fa-angle-down"></i>
                        </div>
                        {showText && <div className="nav-select-box-list">
                            <ul>
                                {
                                    countries.map((element,index) => {
                                        return (
                                            <RegionListItem children={element} key={index+1}/>
                                        )
                                    })
                                }
                            </ul>
                        </div>}
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navigation;
