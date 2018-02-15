import React, { Component } from 'react';

class NewComent extends Component {

    render() {
        return (
            <div className="row">
              <textarea placeholder="Commente" className="form-control"></textarea>
            </div>
        );
    }
}

export default NewComent;