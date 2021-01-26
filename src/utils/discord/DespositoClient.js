const { Client } = require("discord.js")
const PROTO = require("../../strc/prtyps/proto")

module.exports = class DespoitoClient extends Client {
	constructor(token) {
		super()
		super.login(token)
                
		this.acess = ["748320609746026607", "451920956768649226"]
		this.commands = new Map()
                this.aliases = new Map()

                PROTO.load()
	}
        
        resolveCommand (arg) { 
           const probableCommand = this.commands.get(arg) || this.aliases.get(arg)
           if(typeof probableCommand === "string") {
               const realCommand = this.commands.get(probableCommand)
               realCommand.name = probableCommand
               return realCommand
           } else if(typeof probableCommand === "object") {
               probableCommand.name = arg
               return probableCommand
           }
        }

	get rssUsage () {
		return Math.round(process.memoryUsage().rss / 1024 / 1024)
	}
}
