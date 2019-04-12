import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAg1UtsZluvN9-PTtvNKzVa7cEa4HXAvyc",
    authDomain: "chatbox-app-e20f3.firebaseapp.com",
    databaseURL: "https://chatbox-app-e20f3.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base