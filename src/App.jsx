import './App.css'
import { useState } from "react";
import FilterBy from './components/FilterBy'
import CountriesDisplay from './components/CountriesDisplay'
import { CountryContextProvider } from './context/CountryContext';
import ShowSingleCountry from './components/ShowSingleCountry';

function App() {

  const [continent, setContinent] = useState('')
  const [continentChecked, setContinentChecked] = useState('')
  const handleContintentFilter = (e) => {
    setContinentChecked(e.target)
    setContinent(e.target.value)
    if(e.target === continentChecked) {
      e.target.checked = false
      setContinent('')
      setContinentChecked('')
    }
  }

  const [currency, setCurrency] = useState('')
  const [currencyChecked, setCurrencyChecked] = useState('')
  const handleCurrencyFilter = (e) => {
    setCurrencyChecked(e.target)
    setCurrency(e.target.value)
    if(e.target === currencyChecked) {
      e.target.checked = false
      setCurrency('')
      setCurrencyChecked('')
    }
  }

  return (
    <div className='main'>
      <CountryContextProvider>
        <FilterBy
          handleContintentFilter={handleContintentFilter}
          handleCurrencyFilter={handleCurrencyFilter}
        />
        <CountriesDisplay continent={continent} currency={currency} />
        <ShowSingleCountry />
      </CountryContextProvider>
    </div>
  )
}

export default App
