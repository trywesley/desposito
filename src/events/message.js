const messages = require("../../phrases/messages")

module.exports = (message, desposito) => {
    if(message.author.bot || message.channel.type === "dm") return

    const prefix = message.content.trim().split(/ +/)[0]
    const data = {
        message: message,
        prefix: prefix
    }
        
    if(["desposito", "despo", "dp"].includes(prefix)) {
        data.command = message.content.trim().split(/ +/).slice(1)[0]
        message.arguments = message.content.trim().split(/ +/).slice(2)
        const archive = desposito.commands.get(data.command) || desposito.aliases.get(data.command)
        
        if(archive) { 
            if(archive.requireAcessPass && !desposito.acess.includes(message.author.id)) return
            archive.open(data, desposito)
            console.log('log', `${message.author.tag} (${message.author.id}) executou o comando: ${data.command}`) 
        }
    }
}
