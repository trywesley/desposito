const { Client } = require("discord.js")
const PROTO = require("../../strc/prtyps/proto")
const firebase = require("../manager/Firebase")
const DataQuery = require("../manager/DataQuery")

module.exports = class DespoitoClient extends Client {
	constructor(token) {
		super()
		super.login(token)
                
		this.acess = ["748320609746026607", "451920956768649226"]
		this.commands = {}
                this.database = new DataQuery(firebase())

                PROTO.load()
	}
        
	get rssUsage () {
		return Math.round(process.memoryUsage().rss / 1024 / 1024)
	}
}
