import React from 'react';
import Dashboard from './dashboard.js'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //states
        }
    }
    render() {
        return (
            <div>
                <header className="App-header">
                </header>
                <Dashboard></Dashboard>
            </div>
        )
    }

}




export default App;
