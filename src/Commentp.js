import React, { Component } from 'react';

class Commentp extends Component {

    render(){
        return(
            <p className="alert alert-warning">{this.props.coment.coment}</p>
        )
    }
}
  
export default Commentp