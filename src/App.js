import React, { Component } from 'react';
import 'bootstrap-css-only'
import NewComent from './NewComent'

class App extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="text-center alert alert-success">Defininfo o app</h1>
                <NewComent/>
            </div>
        )
    }
}

export default App;