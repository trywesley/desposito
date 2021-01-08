const { Collection } = require("discord.js")
const cownLection = new Collection()
//yay

module.exports = class CountdownManager {
    static verify (message, time) {    
        const user = message.author

        if(cownLection.has(user.id)) {
            const calc = time - Math.floor((Date.now() - cownLection.get(user.id)) / 1000)
            return message.channel.send("Countdown: " + calc + " segundo(s)")
        } else {
            cownLection.set(user.id, Date.now())
            setTimeout(()  => {
                cownLection.delete(user.id)
            }, time * 1000)

            return false
        }
    }
}
