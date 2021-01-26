const fs = require("fs")
module.exports = (desposito) => {
    fs.readdirSync('src/commands').forEach(f => {
        const command = require(`../../commands/${f}`)
        const commandName = f.replace(/.js/g, "")
    
        if(command.aliase) {
            const aliases = command.aliase.split(" ")
            aliases.forEach(aliase => {
                console.log("Command", "Aliase " + aliase + " adicionada")
                desposito.aliases.set(aliase, commandName)
            })
        }
    
        desposito.commands.set(commandName, command)
        console.log("Command", "Carregamento do comando " + f + " concluido\n")
    })
}
