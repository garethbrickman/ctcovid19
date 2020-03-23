import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.js'


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.599998,
      lng: -72.699997
    },
    zoom: 8
  };
  addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  render() {
    const dict = require('./data/m20200323.json')
    const usa_dict = require('./data/usa_20200323.json')
    const global_dict = require('./data/global_20200323.json')
    const date = 'March 23rd, 2020 4:21pm'
    var total = 0
    for(let value of Object.values(dict)){
      total += value;
    }
    // const total = dict => Object.values(dict).reduce((a, b) => a + b);
    return (
      // Important! Always set the container height explicitly
      <div style={{width: "100%"}}>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', paddingTop: '20px', backgroundColor: '#16161d', width: '100%'}}>
          <h2 style={{margin: 'auto', font: '50', fontWeight: 'bold', color: 'orange', border: 'solid #16161d 2px'}}>{this.addCommas(dict['Total'])}<h1 style={{textAlign: 'center'}}>Confirmed CT</h1></h2>
          <h2 style={{margin: 'auto', font: '50', fontWeight: 'bold', color: 'orange', border: 'solid #16161d 2px'}}>{this.addCommas(usa_dict['cases'])}<h1 style={{textAlign: 'center'}}>Confirmed USA</h1></h2>
          <h2 style={{margin: 'auto', font: '50', fontWeight: 'bold', color: 'orange', border: 'solid #16161d 2px'}}>{this.addCommas(global_dict['cases'])}<h1 style={{textAlign: 'center'}}>Confirmed Global</h1></h2>
        </div>
        <h1 style={{marginBottom: '50px', color: 'gray'}}>Source: <a class='link' href='https://www.worldometers.info/coronavirus/country/us/'>worldometer</a></h1>
        <h2>Counties with Positive Cases as of {date}</h2>
        <div className="map" style={{ height: '80vh', width: '100%'}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAFl0p7Zj1aSMscGUdeWlGkrhqZrFyogZg' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            heatmapLibrary={true}
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
              sources: <a class="link" href="https://portal.ct.gov/coronavirus">https://portal.ct.gov/coronavirus</a><br/>
              sources: <a class="link" href="https://www.ctpost.com/local/article/Government-watchdogs-ask-for-freer-15145759.php">4th Ct Death</a>
            </p>
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}
 
export default SimpleMap;