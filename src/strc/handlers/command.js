const fs = require("fs")
module.exports = (desposito) => {
    fs.readdirSync('src/commands').forEach(f => {
        const command = require(`../../commands/${f}`)
        const commandName = f.replace(/.js/g, "")
    
        if(command.aliase) {
            const aliases = command.aliase.split(" ")
            aliases.forEach(aliase => {
                Object.defineProperty(desposito.commands, aliase, { enumerable: false, writable: true })
                command.name = commandName
                desposito.commands[aliase] = command
            })
        }
    
        desposito.commands[commandName] = command
        console.log("Command", "Carregamento do comando " + f + " concluido\n")
    })
}
