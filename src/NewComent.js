import React, { Component } from 'react';

class NewComent extends Component {

    constructor(){
        super()
        this.handleEnter = this.handleEnter.bind(this);
    }

   handleEnter(e){
       if(e.keyCode === 13){
            this.props.postNewComent({
                coment:this.refs.coment.value
            })
            this.refs.coment.value = ''
            e.preventDefault()
       }
   }


    render() {
        return (
            <div className="row">
              <textarea ref="coment" onKeyDown={this.handleEnter} placeholder="Commente" className="form-control"></textarea>
            </div>
        );
    }
}

export default NewComent;