import React, { Component } from 'react';

const Commentp = (props) =>{
    {console.log(props.coment)}
    {if(props.coment.user){ 
       var nome = props.coment.user.name
    }else{
        var nome = ''
    }
}
 return <p className="alert alert-warning"><img title={nome} style={{"width":"6%",'borderRadius':'50%','margin':'10px'}} src={props.coment.user.foto}/> {props.coment.coment}</p>
}
export default Commentp