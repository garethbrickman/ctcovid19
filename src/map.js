import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.js'

 
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
          <Marker
            lat={41.310726}
            lng={-72.929916}
            name="NEW HAVEN COUNTY"
            color="red"
          />
          <Marker
            lat={41.763710}
            lng={-72.685097}
            name="Hartford COUNTY"
            color="red"
          />
          <Marker
            lat={41.79}
            lng={-73.24}
            name="Litchfield COUNTY"
            color="red"
          />
          <Marker
            lat={41.14121}
            lng={-73.26373}
            name="Fairfield COUNTY"
            color="red"
          />
          <Marker
            lat={41.56232}
            lng={-72.65065}
            name="Middlesex COUNTY"
            color="red"
          />
          <Marker
            lat={41.35333192}
            lng={-72.092999628}
            name="New London COUNTY"
            color="red"
          />
          <Marker
            lat={41.87149}
            lng={-72.36869}
            name="Tolland COUNTY"
            color="red"
            />
          <Marker
            lat={41.7106543}
            lng={-72.2081338}
            name="Windham COUNTY"
            color="red"         />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;