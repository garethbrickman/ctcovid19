import React from 'react';
import Chart from './chart.js'
import SimpleMap from './map.js';
import CountyTable from './table.js'
import './App.css';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Connecticut COVID-19",
            positiveXValues: [],
            timeYValues: [],
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
                <SimpleMap class="map"></SimpleMap>
                <br/><br/><br/><br/>
                <div className="tableChartContainer">
                    <Chart
                        title={this.state.title}
                        positiveXValues={this.state.positiveXValues}
                        timeYValues={this.state.timeYValues}
                    ></Chart>
                    <CountyTable></CountyTable>
                </div>
            </div>
        )
    }
    componentDidUpdate(prevProps) {
        //temp
    }
}

export default Dashboard;
