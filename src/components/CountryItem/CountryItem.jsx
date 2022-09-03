import React from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CountryItem({ name, alpha2Code, alpha3Code }) {
    const flagUrl = "https://flagpedia.net/data/flags/icon/72x54/"+alpha2Code.toLowerCase()+".png"  
    return (
        <div className='country'>
            <img src={flagUrl} alt="no-flag" />
            <p>{name.common}</p>
            {/* <p>Country Code:{alpha2Code}</p> */}
            <Link to={`/countries/${alpha2Code}`}>
                {alpha2Code}
            </Link>
        </div>
    )
}
