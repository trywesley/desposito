const Discord = require("discord.js")
const phrases = require("../../../phrases/manager.js")

class PROTO {
    static load() {
        Discord.Message.prototype.desply = function reply(ind, ref = undefined, ...args) {
            const msg = phrases(ind, ref)
            return this.channel.send(msg)
        }

        Discord.Message.prototype.desdit = function edit(ind, ref = undefined, ...args) {
            const msg = phrases(ind, ref)
            return this.edit(msg)
        }

        Discord.Message.prototype.helply = function send(ind, ...args) {
            return this.channel.send("> " + this.author.username + ", te apresento o comando **" + ind.toUpperCase() + "**!\n> " + phrases("help#" + ind + ".description") + "\n🤔 Não sabe como usar? Use-o da seguinte maneira: `" + phrases("help#" + ind + ".usage") + "`")
        }
  
    }
}

module.exports = PROTO
