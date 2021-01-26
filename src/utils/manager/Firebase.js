const firebase = require("firebase")

module.exports = async () => {
const fconfig = {
    apiKey: "AIzaSyCLAobFvnSQcmkBlSqP0LWnC3lQblWag7E",
    authDomain: "wweberbase.firebaseapp.com",
    databaseURL: "https://wweberbase.firebaseio.com",
    projectId: "wweberbase",
    storageBucket: "wweberbase.appspot.com",
    messagingSenderId: "876424523824",
    appId: "1:876424523824:web:dba7529b6b6838fe53fdf5",
    measurementId: "G-73TD661J43"
  };

!firebase.apps.length ? firebase.initializeApp(fconfig) : firebase.app()
return firebase.database()
}
