import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAL2MbhA4RFzeB6Nc2zV4zfobwGy9bEBnc",
    authDomain: "devreact-96f6d.firebaseapp.com",
    databaseURL: "https://devreact-96f6d.firebaseio.com",
    projectId: "devreact-96f6d",
    storageBucket: "devreact-96f6d.appspot.com",
    messagingSenderId: "787967214801"
})

const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
  'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base