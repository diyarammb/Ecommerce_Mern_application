import { createContext, useContext } from "react";
import { useState } from "react";
import { currencies } from "data/Currencies";

const CurrenciesContext = createContext();

const CurrenciesProvider = ({ children }) => {
    const [currency, setCurrency] = useState(currencies[0]);
    return <CurrenciesContext.Provider value={{currency, setCurrency}}>{children}</CurrenciesContext.Provider>;
}

//custom hooks
const useCurrenciesContext = () => {
    return useContext(CurrenciesContext);
  };

export { CurrenciesProvider, CurrenciesContext, useCurrenciesContext };