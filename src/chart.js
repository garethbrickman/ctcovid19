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
        const dict = require('./data/m20200520.json')
        const dates = ['03/08', '03/09', '03/10', '03/11', '03/12', '03/13', '03/14', '03/15', '03/16', '03/17', '03/18', '03/19', '03/20', '03/21', '03/22', '03/23', '03/24', '03/25', '03/26', '03/27', '03/28', '03/29', '03/30', '03/31', '04/01', '04/02', '04/03', '04/04', '04/05', '04/06', '04/07', '04/08', '04/09', '04/10', '04/11', '04/12', '04/13', '04/14', '04/15', '04/16', '04/17', '04/18', '04/19', '04/20', '04/21', '04/22', '04/23', '04/24', '04/25', '04/26', '04/27', '04/28', '04/29', '04/30', '05/01', '05/02', '05/03', '05/04', '05/05', '05/06', '05/07', '05/08', '05/09', '05/10', '05/11', '05/12', '05/13', '05/14', '05/15', '05/16', '05/17', '05/18', '05/19', '05/20']
        const confirmed = [1, 2, 2, 3, 6, 11, 23, 27, 41, 68, 96, 159, 194,223,327,415,618,875, 1012, 1291,1524,1993,2571,3128,3557,3824,4914, 5276, 5675, 6906, 7781, 8781, 9784, 10538, 11510, 12035, 13381, 13989, 14755, 15884, 16809, 17550, 17962, 19815, 20360, 22469, 23100, 23921, 24582, 25269, 25997, 26312, 26767, 27700, 28764, 29287, 29312, 29973, 30621, 30995, 31784, 32411, 32984, 33554, 33765, 34333, 34855, 35464, 36085, 36703, 37419, 38116, 38430, 39017]
        const deaths = [0,0,0,0,0,0,0,0,0,0,1,3,4,5,8,10,12,19, 21,27,33,34,36,69, 85,112, 131, 165, 189, 206, 277, 335, 380, 448, 494, 554, 602, 671, 868, 971, 1036, 1086, 1127, 1331, 1423, 1544, 1639, 1764, 1862, 1924, 2012, 2089, 2168, 2257, 2339, 2436, 2495, 2556, 2633, 2718, 2797, 2874, 2932, 2967, 3008, 3041, 3125, 3219, 3285, 3339, 3408, 3449, 3472, 3529]
        const newCase = [1, 1, 0, 1, 3, 5, 12, 4, 14, 27, 28, 63, 35, 29, 104, 88, 203,257,137,279,233,469,578,557, 429,267, 1090, 362, 399, 1231, 875, 1000, 1003, 754, 972, 525, 1346, 608, 766, 1129, 925, 741, 412, 1853, 545, 2109, 631, 821, 689, 687, 728, 315, 455, 933, 1064, 523, 25, 661, 648, 374, 789, 627, 573, 570, 211, 568, 522, 609, 621, 618, 716, 697, 314, 587]
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
