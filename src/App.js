import React from 'react';
import './App.css';
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
            <div className="App">
                <header className="App-header">
                </header>
                <Dashboard></Dashboard>
            </div>
        )
    }

}




export default App;
