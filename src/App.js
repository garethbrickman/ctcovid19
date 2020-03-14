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

    render() {
        return (
            <div className="App">
            <header className="App-header">
            </header>
            <h3>Data</h3>
            <Table></Table>
            <Chart
            title = {this.state.title}
            positiveXValues = {this.state.positiveXValues}
            timeYValues = {this.state.timeYValues}
            ></Chart>
          </div>
        )
    }
    componentDidUpdate(prevProps) {
        //temp
    }
}




export default App;
