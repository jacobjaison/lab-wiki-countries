import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import countriesData from '../countries.json'

export default function CountryDetailsPage() {
    const { id } = useParams();
    const [ country, setCountry ] = useState(null);

    useEffect(() => {
        console.log('Mounted');
        const foundedCountry = countriesData.find(country => country.alpha2Code == id);
        setCountry(foundedCountry);
        const handleScroll = () => console.log('Scroll');
        window.addEventListener('scroll', handleScroll);
        // Unmount Phase 
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[id])
    if (!country) {
        return <p> Loading</p>
    }
  return (
    <div>
      <h1> Country Details</h1>
      <h2>Country :{country.alpha2Code}</h2>
      {<h3>Name : {country.name.official}</h3>}
    </div>
  )
}
