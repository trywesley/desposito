const DespositoEmbed = require("../utils/discord/DespositoEmbed")

module.exports = {
    aliase: "userinfo ui",
    countdown: 5,
    clientPermissions: ["MANAGE_MESSAGES"],
    async open (data, desposito) {
    
        let timeout
        const user = data.message.arguments[0] ? desposito.users.cache.get(data.message.arguments[0].replace(/[!@<>]/g, "")) : data.message.author
        if(!user) return data.message.desply("general#no_user")

        const embed = new DespositoEmbed()
        .selectPreset("userinfo", user)

        const message = await data.message.channel.send(embed)
        embed.setFooter("")
        const emoji = "🖼"
        message.react(emoji)

        const filter = (r, u) => r.emoji.name === emoji && u.id === data.message.author.id
        const collector = message.createReactionCollector(filter, {time: 60000})
        collector.on("collect", async (r, u) => {
            r.remove()
            let avatars = await desposito.database.get("Desposito/Users/" + user.id + "/Avatars")
            if(!avatars) {
                embed.setDescription(data.phrases("general#no_avatar"))
                message.edit(embed)
            }
            avatars = Object.values(avatars)
    
            let page = 0
            embed.setImage(avatars[0])
            message.edit(embed)

            const reactionsArray = ["➖", "➕"]
            reactionsArray.forEach(r => message.react(r))

            const filter = (r, u) => reactionsArray.includes(r.emoji.name) && u.id === data.message.author.id
            const collector = message.createReactionCollector(filter)
            collector.on("collect", (reaction, user) => {
                if(reaction.emoji.name ===  "➕") { page++ } else { page-- }
                avatars[page] ? (embed.setImage(avatars[page]), message.edit(embed)) : (page = 0, embed.setImage(avatars[page]), message.edit(embed))
                if(timeout) clearTimeout(timeout)
                timeout = setTimeout(() => {
                    collector.stop()
                }, 20000)
            })
        })
    }
}
