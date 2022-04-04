import './ContinentFilter.css'

export default function ContinentFilter({setContinent}) {

    return (
        <div>
            <h2>Continent</h2>
            <form className='continentFilterForm'>
                <label>
                    <div>
                        <input onClick={setContinent} type="radio" value="AF" name='continent' /> <span>Africa</span>
                    </div>
                    <div>
                        <input onClick={setContinent} type="radio" value="AN" name='continent' /> <span>Antarctica</span>
                    </div>
                    <div>
                        <input onClick={setContinent} type="radio" value="AS" name='continent' /> <span>Asia</span>
                    </div>
                    <div>
                        <input onClick={setContinent} type="radio" value="EU" name='continent' /> <span>Europe</span>
                    </div>
                    <div>
                        <input onClick={setContinent} type="radio" value="NA" name='continent' /> <span>North America</span>
                    </div>
                    <div>
                        <input onClick={setContinent} type="radio" value="OC" name='continent' /> <span>Oceania</span>
                    </div>
                    <div>
                        <input onClick={setContinent} type="radio" value="SA" name='continent' /> <span>South America</span>
                    </div>
                </label>
            </form>
        </div>
    )
}