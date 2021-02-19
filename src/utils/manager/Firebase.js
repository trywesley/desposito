const firebase = require("firebase")

module.exports = () => {
const fconfig = process.env.FIREBASE_CREDENTIALS

!firebase.apps.length ? firebase.initializeApp(fconfig) : firebase.app()
return firebase.database()
}
