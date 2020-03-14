import React from 'react';
import Table from './table.js';
import Chart from './chart.js'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Sick Chart Bro",
            positiveXValues: [],
            timeYValues: [],
        }
    }

    // https://www.cdc.gov/coronavirus/2019-ncov/cases-in-us.html - coronavirus in usa
    createTable() {
        const dict = require('./U20200313.json')

        const table = (
            <div>
                <table>
                    <col></col>
                    <colgroup span="2"></colgroup>
                    <colgroup span="2"></colgroup>
                    <tr>
                        <td rowspan="2"></td>
                        <th colspan="2" scope="colgroup">State Public Health Labs</th>
                        <th colspan="2" scope="colgroup">Commercial or Other Labs</th>
                    </tr>
                    <tr>
                        <th scope="col">Positive</th>
                        <th scope="col">Negative</th>
                        <th scope="col">Positive</th>
                        <th scope="col">Negative</th>
                    </tr>
                    <tr>
                        <th scope="row">Fairfield</th>
                        <td>{dict["Fairfield"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["Fairfield"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["Fairfield"]["statelab"]["Positive"]}</td>
                        <td>{dict["Fairfield"]["statelab"]["Negative"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Hartford</th>
                        <td>{dict["Hartford"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["Hartford"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["Hartford"]["statelab"]["Positive"]}</td>
                        <td>{dict["Hartford"]["statelab"]["Negative"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Litchfield</th>
                        <td>{dict["Litchfield"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["Litchfield"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["Litchfield"]["statelab"]["Positive"]}</td>
                        <td>{dict["Litchfield"]["statelab"]["Negative"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Middlesex</th>
                        <td>{dict["Middlesex"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["Middlesex"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["Middlesex"]["statelab"]["Positive"]}</td>
                        <td>{dict["Middlesex"]["statelab"]["Negative"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">New Haven</th>
                        <td>{dict["New Haven"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["New Haven"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["New Haven"]["statelab"]["Positive"]}</td>
                        <td>{dict["New Haven"]["statelab"]["Negative"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">New London</th>
                        <td>{dict["New London"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["New London"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["New London"]["statelab"]["Positive"]}</td>
                        <td>{dict["New London"]["statelab"]["Negative"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Tolland</th>
                        <td>{dict["Tolland"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["Tolland"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["Tolland"]["statelab"]["Positive"]}</td>
                        <td>{dict["Tolland"]["statelab"]["Negative"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Windham</th>
                        <td>{dict["Windham"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["Windham"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["Windham"]["statelab"]["Positive"]}</td>
                        <td>{dict["Windham"]["statelab"]["Negative"]}</td>
                    </tr>
                </table>
            </div>
        )
        return (table)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
                <h3>Covid 19 in CT as of March 13, 2020</h3>
                {this.createTable()}
                <Chart
                    title={this.state.title}
                    positiveXValues={this.state.positiveXValues}
                    timeYValues={this.state.timeYValues}
                ></Chart>
            </div>
        )
    }
    componentDidUpdate(prevProps) {
        //temp
    }
}




export default App;
