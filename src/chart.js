import React from 'react';
import Plot from 'react-plotly.js';
import './chart.css';


class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            positiveXValues: [],
            timeYValues: [],
        }
    }

    render() {
        const dates = ['03/07', '03/08', '03/09', '03/10', '03/11', '03/12', '03/13', '03/14', '03/15']
        const confirmed = [0, 1, 2, 2, 3, 6, 11, 23, 27]
        const deaths = [0,0,0,0,0,0,0,0,0]
        return (
            <div className="chart">
                <Plot
                    data={[
                        {
                            x: dates,
                            y: confirmed,
                            type: 'line',
                            //mode: 'lines+markers',
                            marker: {color: 'blue', line: {width: 2.5}},
                            name: 'Confirmed Cases'
                        },
                        {
                            x: dates,
                            y: deaths,
                            //type: 'scatter',
                            //mode: 'lines+markers',
                            marker: {color: 'red'},
                            name: 'Deaths'
                        },
                    ]}
                    layout={
                        {title: this.state.title + ' Chart',
                        xaxis: {fixedrange: true},
                        yaxis: {fixedrange: true}}
                    }
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




export default Chart;
