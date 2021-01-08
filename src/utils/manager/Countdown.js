const { Collection } = require("discord.js")
const cownLection = new Collection()

module.exports = class CountdownManager {
    static verify (message, time) {    
        const user = message.author

        if(cownLection.has(user.id)) {
            const calc = cownLection.get(user.id).time - Math.floor((Date.now() - cownLection.get(user.id).Date) / 1000)
            return message.channel.send("Countdown: " + calc + " segundo(s)")
        } else {
            cownLection.set(user.id, { time: time, Date: Date.now() })
            setTimeout(()  => {
                cownLection.delete(user.id)
            }, time * 1000)

            return false
        }
    }
}
