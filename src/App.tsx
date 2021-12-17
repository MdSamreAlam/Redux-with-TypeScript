import React from 'react';
import './App.css';
import Header from './containers/Header';
import ProductPage from './containers/ProductList';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import FooterPage from './containers/Footer';






function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <ProductPage />
        <FooterPage />
      </Router>

    </div>
  );
}

export default App;
