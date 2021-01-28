const IFU = require("../utils/ImgurFileUpload")

module.exports = (oldUser, newUser, desposito) => {
    if(oldUser.displayAvatarURL({dynamic: true, size: 2048}) ===  newUser.displayAvatarURL({dynamic: true, size: 2048})) return
    const obj = {}
    IFU(newUser.displayAvatarURL({format: "png", dynamic: true, size: 2048})).then(link => {
        obj[Date.now()] = link 

        desposito.database.update("Desposito/Users/" + oldUser.id + "/Avatars", obj)
    })
}
