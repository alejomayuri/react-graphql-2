import './ShowSingleCountry.css'
import { useContext } from "react"
import CountryContext from "../../context/CountryContext"

export default function ShowSingleCountry() {

    const { country } = useContext(CountryContext)
    // console.log(country[0])
    if(!country[0]) return (
        <div className="ShowSingleCountry">
            <p>No country selected</p>
        </div>
    )
    return (
        <div className='ShowSingleCountry'>
            <div className="Country">
                <div className='CountryHeader'>
                    <p>{country[0]?.emoji}</p>
                    <p>{country[0]?.name}</p>
                </div>
                <div>
                    <p>{`Code: ${country[0]?.code}`}</p>
                    <p>{`Currency: ${country[0]?.currency}`}</p>
                    <p>{`Continent: ${country[0]?.continent.name}`}</p>
                    <p>{`Languages: ${country[0]?.languages.map(language => language.name).join(', ')}`} </p>
                    <p>{`Capital: ${country[0]?.capital}`}</p>
                </div>
            </div>
        </div>
    )
}
