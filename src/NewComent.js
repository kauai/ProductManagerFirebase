import React, { Component } from 'react';

class NewComent extends Component {
    constructor(){
        super()
        this.handleEnter = this.handleEnter.bind(this);
    }

   handleEnter(e){
       if(e.keyCode === 13){
            this.props.postNewComent({
                coment:"teste de comentarios!!!"
            })
        e.preventDefault()
       }
   }
    render() {
        return (
            <div className="row">
              <textarea onKeyDown={this.handleEnter} placeholder="Commente" className="form-control"></textarea>
            </div>
        );
    }
}

export default NewComent;