import './FilterBy.css';
import ContinentFilter from "../ContinentFilter";
import CurrencyFilter from "../CurrencyFilter";
import SearchForm from "../SearchForm";

export default function FilterBy({ handleContintentFilter, handleCurrencyFilter }) {

  return (
    <div className='FilterBy'>
      <div className='FilterByContainer'>
        <SearchForm />
        <ContinentFilter setContinent={handleContintentFilter} />
        <CurrencyFilter setCurrency={handleCurrencyFilter} />
      </div>
    </div>
  )
}
