/*
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
 */

import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={position}>
            <Popup>
              <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}


export default App;
