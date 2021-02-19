const Upload = require("../utils/ImgurFileUpload")

module.exports = (oldUser, newUser, desposito) => {
    const oldAvatar = oldUser.displayAvatarURL({dynamic: true, size: 2048})
    const newAvatar = newUser.displayAvatarURL({dynamic: true, size: 2048})  

    if(oldAvatar === newAvatar) return
    const obj = {}

    Upload(newAvatar).then(link => {
        obj[Date.now()] = link 
        desposito.database.update("Desposito/Users/" + oldUser.id + "/Avatars", obj)
    })
}
