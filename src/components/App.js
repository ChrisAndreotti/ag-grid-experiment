import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import BasicGrid from './BasicGrid';
import GridCellClickPopup from './GridCellClickPopup';
import AppStyles from './App.module.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={AppStyles.wrapper}>
          <nav className={AppStyles.mainNav}>
            <h3>Examples:</h3>
            <ul>
              <li><Link to={`/`}>Basic ag-Grid example</Link></li>
              <li><Link to={`/grid-with-popup`}>Grid with a popup</Link></li>
            </ul>
          </nav>
          <main className={AppStyles.content}>
            <Route exact path="/" component={BasicGrid} />
            <Route path="/grid-with-popup" component={GridCellClickPopup} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;