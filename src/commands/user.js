const DespositoEmbed = require("../utils/discord/DespositoEmbed")

module.exports = {
    aliase: "userinfo ui",
    countdown: 5,
    clientPermissions: ["MANAGE_MESSAGES"],
    requireMention: {
        size: 1
    },
    async open (data, desposito) {
        const reactionsArray = ["➖", "➕"]
        const emoji = "🖼"
        let timeout

        const user = data.mentions[0]
        const embed = new DespositoEmbed()
        .selectPreset("userinfo", user)

        const message = await data.message.channel.send(embed)
        embed.setFooter("")
        message.react(emoji)

        const filter = (r, u) => r.emoji.name === emoji && u.id === data.message.author.id
        const collector = message.createReactionCollector(filter, {time: 60000})
        collector.on("collect", async (r, u) => {
            r.remove()
            let avatars = await desposito.database.get("Desposito/Users/" + user.id + "/Avatars")
            if(!avatars) {
                embed.setDescription(data.phrase("general#no_avatar"))
                message.edit(embed)
            }
            avatars = Object.values(avatars)
    
            let page = 0
            embed.setImage(avatars[page])
            message.edit(embed)
            reactionsArray.forEach(r => message.react(r))

            const filter = (r, u) => reactionsArray.includes(r.emoji.name) && u.id === data.message.author.id
            const collector = message.createReactionCollector(filter)
            collector.on("collect", (reaction, user) => {
                reaction.emoji.name === "➕" ? page++ : page--
                if(avatars.length === page) page = 0 
                if(page < 0) page = avatars.length - 1

                embed.setImage(avatars[page])
                message.edit(embed)

                if(timeout) clearTimeout(timeout)
                timeout = setTimeout(() => {
                    collector.stop()
                }, 20000)
            })
        })
    }
}
