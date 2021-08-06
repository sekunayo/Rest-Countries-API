import React, { useContext } from 'react';
import { CountryContext } from '../../context/CountryContextProvider';

function RegionListItem(props) {
    const { setCountryType } = useContext(CountryContext);

    const setRegion = () => {
        if (props.children == 'america') {
            setCountryType('region/americas');
        }
        else if (props.children == 'all') {
            setCountryType('all');
        }
        else {
            setCountryType(`region/${props.children}`)

        }
    }
    return (
        <>
            <li onClick={setRegion}>{props.children}</li>
        </>
    )
}

export default RegionListItem;
