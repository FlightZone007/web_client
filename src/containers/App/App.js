import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 48.853,
      lng: 2.35,
      zoom: 5,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div>
        <Map center={position}
             zoom={this.state.zoom}
             style={{
               height: "100vh",
               width: "100vw"
             }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
          />
        </Map>
      </div>
    );
  }
}


export default App;
