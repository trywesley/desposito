module.exports = (oldUser, newUser, desposito) => {
    if(oldUser.displayAvatarURL({dynamic: true, size: 2048}) !==  newUser.displayAvatarURL({dynamic: true, size: 2048})) return
    const obj = {}
    obj[Date.now()] = oldUser.displayAvatarURL({dynamic: true, size: 2048}) 

    desposito.database.update("Desposito/Users/" + oldUser.id + "/Avatars", obj)
}
