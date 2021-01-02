const Discord = require("discord.js")
const phrases = require("../../../phrases/messages.js")

class PROTO {
    static load() {
        Discord.Message.prototype.desply = function send(ind, ref, ...args) {
            const msg = phrases(ind, ref)
            return this.channel.send(msg)
        }
    }
}

module.exports = PROTO
