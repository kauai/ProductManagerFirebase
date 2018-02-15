import React, { Component } from 'react';
import 'bootstrap-css-only'
import NewComent from './NewComent'
import Coment from './Comment'

class App extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="text-center alert alert-success">Defininfo o app</h1>
                <NewComent/>
                <Coment/>
            </div>
        )
    }
}

export default App;