import React, { Component } from 'react';
import 'bootstrap-css-only'
import NewComent from './NewComent'
import Coment from './Comment'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            coments:{
                    "1":{
                        coment:"first comment"
                    },
                    "2":{
                        coment:"second comment"
                    }
            }
        }
        this.postNewComent = this.postNewComent.bind(this);
    }

    postNewComent(coment){
        this.setState({
            coments:{
               ...this.state.coments,
               [Date.now()]:coment
            }
        })

    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center alert alert-success">Defininfo o app</h1>
                <NewComent postNewComent={this.postNewComent}/>
                <Coment coments={this.state.coments}/>
            </div>
        )
    }
}

export default App;