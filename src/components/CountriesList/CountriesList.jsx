import React, { useState } from 'react'
import countriesData from '../../countries.json'
import CountryItem from '../CountryItem/CountryItem'


export default function CountriesList() {
    const [countries, setCountries] = useState(countriesData)
    const displayCountries = () => {
        return (
            countries.map((country, index) => {
                return (
                    <CountryItem key={index}
                    {...country}
                    />
               )               
            })           
        )
    }
  return (
      <div>
          <div className='countries-list'>
              {
                  displayCountries()
              }
          </div>
      </div>
  )
}
