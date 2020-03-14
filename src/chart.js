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
        return (
            <div>
                <Plot
                    data={[
                        {
                            x: this.state.positiveXValues,
                            y: this.state.timeYValues,
                            //type: 'scatter',
                            //mode: 'lines+markers',
                            marker: {color: 'red'},
                        },
                    ]}
                    layout={{title: this.state.title + '  Chart'}}
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
