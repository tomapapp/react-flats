import React, { Component } from 'react';

import FlatCard from './flat.jsx';

class FlatList extends Component {
  highlightFlat = (lat, lng) => {
    this.props.selectFlat(lat, lng);
  }

  renderList = () => {
    return this.props.flats.map((flat) => {
      return <FlatCard key={flat.name} highlightFlat={this.highlightFlat} ImageUrl={flat.imageUrl} price={flat.price} priceCurrency={flat.priceCurrency} name={flat.name} lat={flat.lat} lng={flat.lng} />
    });
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList;
