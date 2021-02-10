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



export default function App() {
  const { changePage, page } = usePagination();
  return (
    <Router>
      <Header changePage={changePage} page={page} />
      <Switch>
        <Route exact path="/" component={CountriesPage} />
        <Route path="/country/:code" component={CountryByCode} />
      </Switch>
    </Router>
  );
}