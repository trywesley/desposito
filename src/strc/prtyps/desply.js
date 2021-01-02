const Discord = require("discord.js")
const phrases = require("../../../phrases/messages.js")

function load() {
    Discord.Message.prototype.desply = (ind, ref, ...args) =>  {
        const msg = phrases(ind, ref)
        return this.channel.send(msg)
    }
}

module.exports = load
