import React, { Component } from 'react';

import flats from '../../data/flats';
import FlatList from './flat-list';
import FlatCard from './flat';
import SimpleMap from './simple-map'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
      selectedFlatLat: flats[0].lat,
      selectedFlatLng: flats[0].lng
    };
  }

  selectFlat = (lat, lng) => {
    this.setState({
      selectedFlatLat: lat,
      selectedFlatLng: lng
    });
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} selectFlat={this.selectFlat} />
        <SimpleMap lat={this.state.selectedFlatLat} lng={this.state.selectedFlatLng} />
      </div>
    );
  }
}

export default App;
