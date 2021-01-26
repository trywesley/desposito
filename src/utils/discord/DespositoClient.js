const { Client } = require("discord.js")
const PROTO = require("../../strc/prtyps/proto")

module.exports = class DespoitoClient extends Client {
	constructor(token) {
		super()
		super.login(token)
                
		this.acess = ["748320609746026607", "451920956768649226"]
		this.commands = {}

                PROTO.load()
	}
        
	get rssUsage () {
		return Math.round(process.memoryUsage().rss / 1024 / 1024)
	}
}
