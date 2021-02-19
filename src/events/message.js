const CountdownManager = require("../utils/manager/Countdown")
const phraseManager = require("../../phrases/manager")

module.exports = (message, desposito) => {
    if(message.author.bot || message.channel.type === "dm") return

    const prefix = message.content.trim().split(/ +/)[0]
    const data = {
        message: message,
        command: message.content.trim().split(/ +/).slice(1)[0],
        phrase: phraseManager
    }
        
    if(["desposito", "despo", "dp"].includes(prefix)) {
        message.arguments = message.content.trim().split(/ +/).slice(2)
        const archive = desposito.commands[data.command]

        if(archive) { 
            if(CountdownManager.verify(message, archive.countdown ? archive.countdown : 0)) return
            if(archive.requireAcessPass && !desposito.acess.includes(message.author.id)) return
            if(data.message.arguments[0] === "🤔") return data.message.helply(archive.name)
            if(archive.clientPermissions && !message.guild.me.permissions.has(archive.clientPermissions)) return message.desply("general#missing_permissions", archive.clientPermissions.join(" | "))
            archive.open(data, desposito)
            console.log('log', `${message.author.tag} (${message.author.id}) executou o comando: ${data.command}`) 
        }
    }
}
