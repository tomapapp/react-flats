import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="marker"></div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      },
      zoom: 11
    };
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAfJjt2gOG-o3EGupsWnFrwhFlmHE3ADoo' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
