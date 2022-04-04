import './CurrencyFilter.css';
import { useEffect, useState } from "react"
import getAllCountries from "../../services/getAllCountries"

export default function CurrencyFilter({setCurrency}) {

    const { data } = getAllCountries()
    const [currencies, setCurrencies] = useState([])

    useEffect(() => {
        let arrCurrency = []
        if (data) arrCurrency = data['countries'].map(country => country.currency)

        function filterArray(arr) {
            const found = {}
            const out = arr.filter(function (element) {
                return found.hasOwnProperty(element) ? false : (found[element] = true);
            })
            return out;
        }
        const newCurrencies = filterArray(arrCurrency)
        setCurrencies(newCurrencies)
    }, [data])

    return (
        <div className='currencyFilterContainer'>
            <h2>Currency</h2>
            <form className='currencyFilterForm'>
                <label>
                    {
                        currencies.map(currency => (
                            <div key={currency}>
                                {
                                    currency !== null
                                    && <>
                                        <input onClick={setCurrency} type="radio" value={currency} name='currency' /> <span>{currency}</span>
                                    </>
                                }
                            </div>
                        ))
                    }
                </label>
            </form>
        </div>
    )
}