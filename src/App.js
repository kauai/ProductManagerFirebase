import React, { Component } from 'react';
import 'bootstrap-css-only'
import NewComent from './NewComent'
import Coment from './Comment'
import base from './base'
import Load from './Load'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            coments:'',
            isLoggedIn:false,
            user:{}
        }
        this.postNewComent = this.postNewComent.bind(this);
        this.load = this.load.bind(this);
        this.auth = this.auth.bind(this);
        
        this.refsComents = base.syncState('comments',{
            context:this,
            state:'coments'
        })

        this.props.auth.onAuthStateChanged((user)=>{
            if(user){
              this.setState({ isLoggedIn: true,user})
            }else{
              this.setState({ isLoggedIn: false, user: {} })
            }
        })
    }

    postNewComent(coment){
        coment.user = {
            uid:this.state.user.uid,
            name:this.state.user.displayName,
            foto:this.state.user.photoURL
        }
        const coments = {...this.state.coments} 
        const timestamp = Date.now()
        coments[timestamp] = coment
        this.setState({
            coments:coments
        })

    }
    load(){
       return !this.state.coments && <Load/>
    }

    auth(provider){
        this.props.auth.signInWithPopup(this.props.providers[provider]).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user)
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(errorCode,errorMessage,email,credential)
            // ...
          });
    }

    render() {
        return (
            <div className="container">
            {console.log(this.state)}
                <h1 className="text-center alert alert-success">Web Testes Facebook</h1>
                {this.state.isLoggedIn &&
                   <div>
                      <img style={{"width":"8%",'borderRadius':'50%','margin':'10px'}} alt={this.state.user.displayName} src={this.state.user.photoURL}/>
                      <p style={{'fontSize':'20px'}}><b>{this.state.user.displayName}</b></p>
                      <br/>
                      <button style={{'position':'absolute','top':'18px','right':'135px'}} className="btn btn-success" onClick={() => this.props.auth.signOut()}>Deslogar</button>
                      <NewComent postNewComent={this.postNewComent}/>
                    </div>
                }
                {!this.state.isLoggedIn && <div className="alert alert-info">
                  <button onClick={() => this.auth('facebook')} className="btn btn-primary">Entre com o FaceBook</button>
                </div>}
                <Coment coments={this.state.coments}/>
                {this.load()}
            </div>
        )
    }
}

export default App;