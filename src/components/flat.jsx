import React, { Component } from 'react';

class FlatCard extends Component {
  constructor(props) {
    super(props);
  };

  clickFlat = () => {
    this.props.highlightFlat(this.props.lat, this.props.lng);
  }


  render() {
    const divStyle = {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('+ this.props.ImageUrl + ')',
    };
    return (
      <div className="card" style={divStyle} onClick={this.clickFlat} >
        <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
      );
  }
}

export default FlatCard;
