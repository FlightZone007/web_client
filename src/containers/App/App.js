import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import classNames from 'classnames/bind';
import styles from './App.css';

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={styles.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
