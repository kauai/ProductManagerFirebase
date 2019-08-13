import React, { Component } from 'react';

const Commentp = (props) =>{
    {console.log('aqui',props)}
    {if(props.coment.user){ 
       var nome = props.coment.user.name
    }else{
        var nome = ''
    }
}
 return <p className="alert alert-warning"><img title={nome || "thiago"} style={{"width":"6%",'borderRadius':'50%','margin':'10px'}} src={""}/> {props.coment.coment}</p>
}
export default Commentp