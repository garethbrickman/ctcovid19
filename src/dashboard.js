import React from 'react';
import Chart from './chart.js'
import SimpleMap from './map.js';
import CountyTable from './table.js'
import BarChart from './barchart.js'
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
        const dict = require('./data/m20200405.json')
        var total = 0
        for(let value of Object.values(dict)){
            total += value;
        }
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
                    <BarChart
                        title={"Cases by Age Group"}
                        positiveXValues={this.state.positiveXValues}
                        timeYValues={this.state.timeYValues}
                    ></BarChart>
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
