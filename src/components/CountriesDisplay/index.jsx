import './CountriesDisplay.css';
import { useState, useEffect, useContext } from 'react';
import getAllCountries from "../../services/getAllCountries"
import CountryContext from "../../context/CountryContext"

export default function CountriesDisplay({continent, currency}) {

    const { loading, error, data } = getAllCountries()
    const [countries, setCountries] = useState([])
    const { setCountry } = useContext(CountryContext)

    useEffect(() => {
        if (data) setCountries(data['countries'])
        if (continent !== '') {
            setCountries(data['countries'].filter(country => country.continent.code === continent))
        }
        if (currency !== '') {
            if (continent !== '') {
                setCountries(data['countries'].filter(country => country.continent.code === continent).filter(country => country.currency === currency))
            } else {
                setCountries(data['countries'].filter(country => country.currency === currency))
            }
        }
    }, [data, continent, currency])

    const handleSetCountry = (country) => {
        setCountry([country])
    }

    return (
        <div className="CountriesDisplay">
            <h2>Countries</h2>
            {
                countries.map(country => (
                    <div className='countryElement' onClick={() => handleSetCountry(country)} key={country.code}>
                        <p>{country.emoji}</p>
                        <p>{country.name}</p>
                    </div>
                ))
            }
        </div>
    )
}
