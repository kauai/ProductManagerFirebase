import React, { Component } from 'react';
import ComentP from './Commentp'

class Coments extends Component {
   renderComment(key,coment){
       return (
          <ComentP key={key} coment={coment}/>
       )
   }
    render() {
        return (
            <div>
                <p>Renderizar comentarios aqui!!!</p>
                    {Object.keys(this.props.coments).map(item => {
                        return this.renderComment(item,this.props.coments[item])
                    })}
            </div>
            
        );
    }
}

export default Coments;