const CountdownManager = require("../utils/manager/Countdown")

module.exports = (message, desposito) => {
    if(message.author.bot || message.channel.type === "dm") return

    const prefix = message.content.trim().split(/ +/)[0]
    const data = {
        message: message,
        command: message.content.trim().split(/ +/).slice(1)[0]
    }
        
    if(["desposito", "despo", "dp"].includes(prefix)) {
        message.arguments = message.content.trim().split(/ +/).slice(2)
        const archive = desposito.commands.get(data.command) || desposito.aliases.get(data.command)

        if(archive) { 
            const isUserInCountdown = CountdownManager.verify(message, 5)
            if(isUserInCountdown) return
            if(archive.requireAcessPass && !desposito.acess.includes(message.author.id)) return
            if(archive.clientPermissions && !message.guild.me.permissions.has(archive.clientPermissions)) return message.desply("perm.missing", archive.clientPermissions)
            archive.open(data, desposito)
            console.log('log', `${message.author.tag} (${message.author.id}) executou o comando: ${data.command}`) 
        }
    }
}
