import React from 'react';
import Plot from 'react-plotly.js';


class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            positiveXValues: [],
            timeYValues: [],
        }
    }
    
    render() {
        const dict = require('./data/m20200408.json')
        const ages = ["0-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", ">=80"]
        const confirmed = [73, 184, 973, 1328, 1438, 1761, 1417, 748, 752]
        const hospital = [0, 2, 5, 12, 19, 37, 42, 46, 42]
        const deaths = [1,0,1,2,9,16,47,80,179]
        return (
            <div style={{width: '700px', height: '100%', marginTop: '20px'}}>
                <Plot
                    useResizeHandler
                    data={[
                        {
                            x: ages,
                            y: confirmed,
                            type: 'bar',
                            //mode: 'lines+markers',
                            marker: {color: '#08d9d6'},
                            name: 'Confirmed Cases'
                        },
                        // {
                        //     x: ages,
                        //     y: hospital,
                        //     type: 'bar',
                        //     //mode: 'lines+markers',
                        //     marker: {color: '#252a34'},
                        //     name: 'Hospitalizations *3/28*'
                        // },
                        {
                            x: ages,
                            y: deaths,
                            type: 'bar',
                            //mode: 'lines+markers',
                            marker: {color: '#ff2e63'},
                            name: 'Deaths'
                        },
                    ]}
                    layout={
                        {
                        title: this.state.title,
                        xaxis: {fixedrange: true},
                        yaxis: {fixedrange: true},
                        margin: {l: 35, r: 35},
                        legend: {
                            x:0,
                            y:1
                        }}
                    }
                    style={{width: '100%', height: '100%'}}
                    config={{responsive: true}}
                />
            </div>
        )
    }
    componentDidUpdate(prevProps) {
        if (prevProps.timeYValues !== this.props.timeYValues) {
            this.setState( {
                positiveXValues : this.props.positiveXValues,
                timeYValues : this.props.timeYValues,
                title: this.props.title,
            })
        if (prevProps.title !== this.props.title) {
            this.setState( {
                positiveXValues : this.props.positiveXValues,
                timeYValues : this.props.timeYValues,
                title: this.props.title,
            })
        }
      }
}
}




export default BarChart;
