import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CountryByCode from '../../containers/CountryByCode';
import CountriesPage from '../../containers/CountriesPage';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CountriesPage} />
        <Route path="/country/:code" component={CountryByCode} />
      </Switch>
    </Router>
  );
}