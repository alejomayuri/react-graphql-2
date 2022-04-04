import { useState, useContext } from "react"
import CountryContext from "../../context/CountryContext"
import getAllCountries from "../../services/getAllCountries"

export default function SearchForm() {

    const [keyword, setKeyword] = useState('')
    const {setCountry} = useContext(CountryContext)
    const {data} = getAllCountries()

    const handleSubmit = evt => {
        evt.preventDefault()
        setCountry(data.countries.filter(country => country.name.toLowerCase().includes(keyword.toLowerCase())))
        setKeyword('')
    }


    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Search a country here..." onChange={handleChange} type='text' value={keyword} />
        </form>
    )

}
