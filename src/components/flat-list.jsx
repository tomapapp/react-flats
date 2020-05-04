import React, { Component } from 'react';

import Flat from './flat';

class FlatList extends Component {
  constructor(props) {
    super(props)
  }

  renderList = () => {
    return this.props.flats.map((flat, index) => {
      return <Flat
      key={flat.name}
      id={index}
      flat={flat}
      selected={flat.name === this.props.selectedFlat.name}
      selectFlat={this.props.selectFlat}/>
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
