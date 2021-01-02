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
    }
}

module.exports = PROTO
