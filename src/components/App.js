import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import BasicGrid from './BasicGrid';
import GridCellClickPopover from './GridCellClickPopover';
import AppStyles from './App.module.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={AppStyles.wrapper}>
          <nav className={AppStyles.mainNav}>
            <h3>Examples:</h3>
            <ul className={AppStyles.navList}>
              <li><Link to={`/`}>Basic ag-Grid example</Link></li>
              <li><Link to={`/grid-with-popover`}>Grid with a popover</Link></li>
            </ul>
          </nav>
          <main className={AppStyles.content}>
            <Route exact path="/" component={BasicGrid} />
            <Route path="/grid-with-popover" component={GridCellClickPopover} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;