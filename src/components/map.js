import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    zoom: 11
  };
  constructor(props){
      super(props);

      this.state = {
          lat: this.props.lat,
          lng: this.props.lng
      }
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
      
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDjJpGmdJ5F-HrI3Po-zquF1E1cHjjSAls'}}
        defaultCenter={{ lat: this.state.lat, lng: this.state.lng }}
        defaultZoom={this.props.zoom}
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