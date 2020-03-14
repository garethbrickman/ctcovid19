import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div style={{ color: 'red'}}>{text}</div>;
 
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
            lat={41.310726}
            lng={-72.929916}
            text="NEW HAVEN COUNTY"
          />
          <AnyReactComponent
            lat={41.763710}
            lng={-72.685097}
            text="Hartford COUNTY"
          />
          <AnyReactComponent
            lat={41.79}
            lng={-73.24}
            text="Litchfield COUNTY"
          />
          <AnyReactComponent
            lat={41.14121}
            lng={-73.26373}
            text="Fairfield COUNTY"
          />
          <AnyReactComponent
            lat={41.56232}
            lng={-72.65065}
            text="Middlesex COUNTY"
          />
          <AnyReactComponent
            lat={41.35333192}
            lng={-72.092999628}
            text="New London COUNTY"
          />
          <AnyReactComponent
            lat={41.87149}
            lng={-72.36869}
            text="Tolland COUNTY"
          />
          <AnyReactComponent
            lat={41.7106543}
            lng={-72.2081338}
            text="Windham COUNTY"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;