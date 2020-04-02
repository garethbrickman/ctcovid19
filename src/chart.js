import React from 'react';
import Plot from 'react-plotly.js';


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
        const dict = require('./data/m20200402.json')
        const dates = ['03/08', '03/09', '03/10', '03/11', '03/12', '03/13', '03/14', '03/15', '03/16', '03/17', '03/18', '03/19', '03/20', '03/21', '03/22', '03/23', '03/24', '03/25', '03/26', '03/27', '03/28', '03/29', '03/30', '03/31', '04/01', '04/02']
        const confirmed = [1, 2, 2, 3, 6, 11, 23, 27, 41, 68, 96, 159, 194,223,327,415,618,875, 1012, 1291,1524,1993,2571,3128, 3557, 3824]
        const deaths = [0,0,0,0,0,0,0,0,0,0,1,3,4,5,8,10,12,19, 21,27,33,34,36,69, 85, 112]
        const newCase = [1, 1, 0, 1, 3, 5, 12, 4, 14, 27, 28, 63, 35, 29, 104, 88, 203,257,137,279,233,469,578,557, 429, 267]
        return (
            <div style={{width: '700px', height: '100%', marginTop: '20px'}}>
                <Plot
                    useResizeHandler
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
                        {
                            x: dates,
                            y: newCase,
                            //type: 'scatter',
                            //mode: 'lines+markers',
                            marker: {color: 'purple'},
                            name: 'New Cases'
                        },
                    ]}
                    layout={
                        {title: this.state.title + ' Chart',
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




export default Chart;
