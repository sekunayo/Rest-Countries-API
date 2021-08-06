import React, { useContext, useState } from 'react'
import { CountryContext } from '../../context/CountryContextProvider';
import RegionListItem from '../RegionListItem/RegionListItem';

function Navigation() {
    const [showText, setShowText] = useState(false);
    const clickHandler = () => {
        setShowText(!showText);
    }
    let countries = ['all','africa', 'america', 'asia', 'europe', 'oceania'];
    const { onChangeHandler, onSubmitHandler } = useContext(CountryContext);
   

    return (
        <nav className="nav">
            <div className="nav-box">
                <form className="nav-search-form" onSubmit={onSubmitHandler}>
                    <input type="search" placeholder="Search for a country" onChange={onChangeHandler}>
                    </input>
                    <i className="fas fa-search" onClick={onSubmitHandler}></i>
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

                                {/* }
                                <li>Africa</li>
                                <li>America</li>
                                <li>Asia</li>
                                <li>Europe</li>
                                <li>Oceania</li> */}
                            </ul>
                        </div>}
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navigation;
