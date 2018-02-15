import React, { Component } from 'react';

class Coments extends Component {

    render() {
        return (
            <div>
                <p>Renderizar comentarios aqui!!!</p>
                <p className="alert alert-info">{JSON.stringify(this.props.coments)}</p>
            </div>
            
        );
    }
}

export default Coments;