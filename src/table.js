import React from 'react';
import './App.css';


class CountyTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                //pass
        }
    }
    createTable() {
        const dict = require('./data/m20200320.json')
        var tempDate = new Date()
        var date = 'March 20th, 2020 4:32pm'
        var total = 0
        for(let value of Object.values(dict)){
            total += value;
        }

        const table = (
            <div style={{marginTop: '50px'}}>
                
                <table class="table">
                    <h1>Counties Test and Positive Cases as of {date}</h1>
                    <tbody>
                    <col></col>
                    <colgroup span="2"></colgroup>
                    <colgroup span="2"></colgroup>
                    <tr>
                        <td rowspan="2"></td>
                        <th colspan="2" scope="colgroup">Totals</th>
                    </tr>
                    <tr>
                        <th scope="col">Positive</th>
                        <th scope="col">Negative</th>
                        <th scope="col">Deaths</th>
                        <th scope="col">Total Tested</th>
                    </tr>
                    <tr>
                        <th scope="row">Fairfield</th>
                        <td>{dict["Fairfield"]}</td>
                        <td>N/A</td>
                        <td>4</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <th scope="row">Hartford</th>
                        <td>{dict["Hartford"]}</td>
                        <td>N/A</td>
                        <td>0</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <th scope="row">Litchfield</th>
                        <td>{dict["Litchfield"]}</td>
                        <td>N/A</td>
                        <td>0</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <th scope="row">Middlesex</th>
                        <td>{dict["Middlesex"]}</td>
                        <td>N/A</td>
                        <td>0</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <th scope="row">New Haven</th>
                        <td>{dict["New Haven"]}</td>
                        <td>N/A</td>
                        <td>0</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <th scope="row">New London</th>
                        <td>{dict["New London"]}</td>
                        <td>N/A</td>
                        <td>0</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <th scope="row">Tolland</th>
                        <td>{dict["Tolland"]}</td>
                        <td>N/A</td>
                        <td>0</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <th scope="row">Windham</th>
                        <td>{dict["Windham"]}</td>
                        <td>N/A</td>
                        <td>0</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <th scope="row">Totals</th>
                        <td>{dict['Total']}</td>
                        <td>N/A</td>
                        <td>4</td>
                        <td>N/A</td>
                    </tr>
                    </tbody>
                    <tfoot>
                        *source: <a href="https://portal.ct.gov/coronavirus">https://portal.ct.gov/coronavirus</a> (No updates on test data)
                    </tfoot>
                </table>
            </div>
        )
        return (table)
    }

    render() {
        return (
            <div>
                {this.createTable()}
            </div>
        )
    }
    componentDidUpdate(prevProps) {
        // handle updates
    }
}




export default CountyTable;
