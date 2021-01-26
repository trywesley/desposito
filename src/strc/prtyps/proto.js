const Discord = require("discord.js")
const phrases = require("../../../phrases/messages.js")

class PROTO {
    static load() {
        Discord.Message.prototype.desply = function reply(ind, ref, ...args) {
            const msg = phrases(ind, ref)
            return this.channel.send(msg)
        }

        Discord.Message.prototype.desdit = function edit(ind, ref, ...args) {
            const msg = phrases(ind, ref)
            return this.edit(msg)
        }
        Discord.Message.prototype.helply = function send(ind, ...args) {
            return this.channel.send("> " + this.author.username + ", te apresento o comando " + ind.toUpperCase() + "\n> " + phrases("commands." + ind + ".description") + "\n\n Não sabe como usar? Use-o da seguinte maneira: `" + phrases("commands." + ind + ".usage") + "`")
        }
  
    }
}

module.exports = PROTO
