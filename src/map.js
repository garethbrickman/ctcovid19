import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.js'
import './map.css';


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.599998,
      lng: -72.699997
    },
    zoom: 8
  };
 
  render() {
    const dict = require('./m20200316.json')
    var total = 0
    for(let value of Object.values(dict)){
      total += value;
    }
    // const total = dict => Object.values(dict).reduce((a, b) => a + b);
    return (
      // Important! Always set the container height explicitly
      <div className="map" style={{ height: '100vh', width: '100%' }}>
        <h1>Counties with Positive Cases as of March 16th, 2020 | Total cases = {total}</h1>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAFl0p7Zj1aSMscGUdeWlGkrhqZrFyogZg' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Marker
              lat={41.310726}
              lng={-72.929916}
              name="New Haven County"
              source=""
              color={dict['New Haven'] ? "red" : "gray"}
              confirmedCases={dict['New Haven']}
            />
            <Marker
              lat={41.763710}
              lng={-72.685097}
              name="Hartford County"
              source=""
              color={dict['Hartford'] ? "red" : "gray"}
              confirmedCases={dict['Hartford']}
            />
            <Marker
              lat={41.79}
              lng={-73.24}
              name="Litchfield County"
              source=""
              color={dict['Litchfield'] ? "red" : "gray"}
              confirmedCases={dict['Litchfield']}
            />
            <Marker
              lat={41.14121}
              lng={-73.26373}
              name="Fairfield County"
              color={dict['Fairfield'] ? "red" : "gray"}
              confirmedCases={dict['Fairfield']}
            />
            <Marker
              lat={41.56232}
              lng={-72.65065}
              name="Middlesex County"
              source=""
              color={dict['Middlesex'] ? "red" : "gray"}
              confirmedCases={dict['Middlesex']}
            />
            <Marker
              lat={41.35333192}
              lng={-72.092999628}
              name="New London County"
              source="*"
              color={dict['New London'] ? "red" : "gray"}
              confirmedCases={dict['New London']}
            />
            <Marker
              lat={41.87149}
              lng={-72.36869}
              name="Tolland County"
              source=""
              color={dict['Tolland'] ? "red" : "gray"}
              confirmedCases={dict['Tolland']}
            />
            <Marker
              lat={41.7106543}
              lng={-72.2081338}
              name="Windham County"
              source=""
              color={dict['Windham'] ? "red" : "gray"}
              confirmedCases={dict['Windham']}        
            />
          </GoogleMapReact>
        <div>
          <p>
            source: <a class="link" href="https://portal.ct.gov/coronavirus">https://portal.ct.gov/coronavirus</a><br/>
            source for New Haven: <a class="link" href="https://www.wtnh.com/news/connecticut/new-haven/yale-says-member-of-university-tests-positive-for-covid-19/">https://www.wtnh.com/news/connecticut/new-haven/yale-says-member-of-university-tests-positive-for-covid-19/</a><br/>
            <br/>
          </p>
          <p></p>
        </div>
      </div>
    );
  }
}
 
export default SimpleMap;