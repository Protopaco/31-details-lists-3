import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CountryByCode from '../../containers/CountryByCode';
import CountriesPage from '../../containers/CountriesPage';
import { usePagination } from '../../hooks/Countries';
import Header from '../../components/header/Header';
import { ThemeProvider } from '../../context/theme-context'



export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={CountriesPage} />
          <Route path="/country/:code" component={CountryByCode} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
