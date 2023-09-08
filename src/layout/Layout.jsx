import { Header } from '../components/shared/Header/Header';
import { Insta } from 'components/shared/Insta/Insta';
import { Footer } from 'components/shared/Footer/Footer';
import { useCurrenciesContext } from 'Context/CurrenciesContext';

export const Layout = ({ children }) => {
  const {currency, setCurrency}=useCurrenciesContext();

  return (
    <>
      <header className='header'>
        <Header currency={currency} onCurrencyChange={setCurrency} />
      </header>
      <main className='content'>
        {children}
        <Insta />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </>
  );
};
