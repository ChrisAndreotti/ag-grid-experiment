import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import BasicGrid from './BasicGrid';
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
            </ul>
          </nav>
          <main className={AppStyles.content}>
            <Route path="/" component={BasicGrid} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;