import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.599998,
      lng: -72.699997
    },
    zoom: 9
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAFl0p7Zj1aSMscGUdeWlGkrhqZrFyogZg' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={41.599998}
            lng={-72.699997}
            text="IM A DOT"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;