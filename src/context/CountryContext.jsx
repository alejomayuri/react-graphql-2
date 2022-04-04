import React, {useState} from 'react'

const Context = React.createContext({})

export function CountryContextProvider ({children}) {
  const [country, setCountry] = useState([])

  return <Context.Provider value={{country, setCountry}}>
    {children}
  </Context.Provider>
}

export default Context