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
        const dict = require('./U20200313.json')

        let totalComercialPos = 0
        let totalComercialNeg = 0
        let totalStatePos = 0
        let totalStateNeg = 0

        for (let key in dict) {
            totalComercialPos += dict[key]['commerciallab']['Positive'];
            totalComercialNeg += dict[key]['commerciallab']['Negative'];
            totalStatePos += dict[key]['statelab']['Positive'];
            totalStateNeg += dict[key]['statelab']['Negative'];
        }

        const table = (
            <div>
                
                <table class="table">
                    <h1>Counties Test and Positive Cases as of March 13th, 2020 (NO UPDATES)</h1>
                    <tbody>
                    <col></col>
                    <colgroup span="2"></colgroup>
                    <colgroup span="2"></colgroup>
                    <tr>
                        <td rowspan="2"></td>
                        <th colspan="2" scope="colgroup">State Public Health Labs</th>
                        <th colspan="2" scope="colgroup">Commercial or Other Labs</th>
                        <th colspan="2" scope="colgroup">Combined Totals</th>
                    </tr>
                    <tr>
                        <th scope="col">Positive</th>
                        <th scope="col">Negative</th>
                        <th scope="col">Positive</th>
                        <th scope="col">Negative</th>
                        <th scope="col">Positive</th>
                        <th scope="col">Negative</th>
                        <th scope="col">Total Tested</th>
                    </tr>
                    <tr>
                        <th scope="row">Fairfield</th>
                        <td>{dict["Fairfield"]["statelab"]["Positive"]}</td>
                        <td>{dict["Fairfield"]["statelab"]["Negative"]}</td>
                        <td>{dict["Fairfield"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["Fairfield"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["Fairfield"]["statelab"]["Positive"] + dict["Fairfield"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["Fairfield"]["statelab"]["Negative"] + dict["Fairfield"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["Fairfield"]["statelab"]["Negative"] + dict["Fairfield"]["commerciallab"]["Negative"] + dict["Fairfield"]["statelab"]["Positive"] + dict["Fairfield"]["commerciallab"]["Positive"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Hartford</th>
                        <td>{dict["Hartford"]["statelab"]["Positive"]}</td>
                        <td>{dict["Hartford"]["statelab"]["Negative"]}</td>
                        <td>{dict["Hartford"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["Hartford"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["Hartford"]["statelab"]["Positive"] + dict["Hartford"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["Hartford"]["statelab"]["Negative"] + dict["Hartford"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["Hartford"]["statelab"]["Negative"] + dict["Hartford"]["commerciallab"]["Negative"] + dict["Hartford"]["statelab"]["Positive"] + dict["Hartford"]["commerciallab"]["Positive"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Litchfield</th>
                        <td>{dict["Litchfield"]["statelab"]["Positive"]}</td>
                        <td>{dict["Litchfield"]["statelab"]["Negative"]}</td>
                        <td>{dict["Litchfield"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["Litchfield"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["Litchfield"]["statelab"]["Positive"] + dict["Litchfield"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["Litchfield"]["statelab"]["Negative"] + dict["Litchfield"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["Litchfield"]["statelab"]["Negative"] + dict["Litchfield"]["commerciallab"]["Negative"] + dict["Litchfield"]["statelab"]["Positive"] + dict["Litchfield"]["commerciallab"]["Positive"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Middlesex</th>
                        <td>{dict["Middlesex"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["Middlesex"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["Middlesex"]["statelab"]["Positive"]}</td>
                        <td>{dict["Middlesex"]["statelab"]["Negative"]}</td>
                        <td>{dict["Middlesex"]["statelab"]["Positive"] + dict["Middlesex"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["Middlesex"]["statelab"]["Negative"] + dict["Middlesex"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["Middlesex"]["statelab"]["Negative"] + dict["Middlesex"]["commerciallab"]["Negative"] + dict["Middlesex"]["statelab"]["Positive"] + dict["Middlesex"]["commerciallab"]["Positive"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">New Haven</th>
                        <td>{dict["New Haven"]["statelab"]["Positive"]}</td>
                        <td>{dict["New Haven"]["statelab"]["Negative"]}</td>
                        <td>{dict["New Haven"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["New Haven"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["New Haven"]["statelab"]["Positive"] + dict["New Haven"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["New Haven"]["statelab"]["Negative"] + dict["New Haven"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["New Haven"]["statelab"]["Negative"] + dict["New Haven"]["commerciallab"]["Negative"] + dict["New Haven"]["statelab"]["Positive"] + dict["New Haven"]["commerciallab"]["Positive"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">New London</th>
                        <td>{dict["New London"]["statelab"]["Positive"]}</td>
                        <td>{dict["New London"]["statelab"]["Negative"]}</td>
                        <td>{dict["New London"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["New London"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["New London"]["statelab"]["Positive"] + dict["New London"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["New London"]["statelab"]["Negative"] + dict["New London"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["New London"]["statelab"]["Negative"] + dict["New London"]["commerciallab"]["Negative"] + dict["New London"]["statelab"]["Positive"] + dict["New London"]["commerciallab"]["Positive"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Tolland</th>
                        <td>{dict["Tolland"]["statelab"]["Positive"]}</td>
                        <td>{dict["Tolland"]["statelab"]["Negative"]}</td>
                        <td>{dict["Tolland"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["Tolland"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["Tolland"]["statelab"]["Positive"] + dict["Tolland"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["Tolland"]["statelab"]["Negative"] + dict["Tolland"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["Tolland"]["statelab"]["Negative"] + dict["Tolland"]["commerciallab"]["Negative"] + dict["Tolland"]["statelab"]["Positive"] + dict["Tolland"]["commerciallab"]["Positive"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Windham</th>
                        <td>{dict["Windham"]["statelab"]["Positive"]}</td>
                        <td>{dict["Windham"]["statelab"]["Negative"]}</td>
                        <td>{dict["Windham"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["Windham"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["Windham"]["statelab"]["Positive"] + dict["Windham"]["commerciallab"]["Positive"]}</td>
                        <td>{dict["Windham"]["statelab"]["Negative"] + dict["Windham"]["commerciallab"]["Negative"]}</td>
                        <td>{dict["Windham"]["statelab"]["Negative"] + dict["Windham"]["commerciallab"]["Negative"] + dict["Windham"]["statelab"]["Positive"] + dict["Windham"]["commerciallab"]["Positive"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Totals</th>
                        <td>{totalStatePos}</td>
                        <td>{totalStateNeg}</td>
                        <td>{totalComercialPos}</td>
                        <td>{totalComercialNeg}</td>
                        <td>{totalStatePos + totalComercialPos}</td>
                        <td>{totalStateNeg + totalComercialNeg}</td>
                        <td>{totalStateNeg + totalComercialNeg + totalStatePos + totalComercialPos}</td>
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
