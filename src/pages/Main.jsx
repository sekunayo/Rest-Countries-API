import React, { useContext, useState, useEffect } from 'react';
import { CountryContext } from '../context/CountryContextProvider';
import Navigation from '../Components/Navigation/Navigation';
import Header from '../Components/Header/Header';
import Loading from './Loading';
import CardContainer from '../Components/CardContainer/CardContainer';
import InvalidName from '../Components/InvalidName/InvalidName';
function Main() {
    const { error } = useContext(CountryContext);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);

    }, [])
    console.log(error);

    return (
        <>
            {loading ? <Loading /> :
                <>
                    <Header />
                <Navigation />
                <CardContainer/> 
                </>
            }
            {error && <InvalidName />}


        </>
    )
}

export default Main;