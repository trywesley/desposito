const dc = require("discord.js")
const moment = require("moment")

module.exports = class DespositoEmbed extends dc.MessageEmbed {
    constructor(message = null) {
        super()
    }

    selectPreset(p, options = {}) {
        switch (p) {
            case "userinfo":
                const object = {
                    online: "disponível",
                    dnd: "ocupado",
                    offline: "indisponível",
                    idle: "ausente",
                    mobile: "celular",
                    desktop: "computador",
                    web: "navegador"
                }

                const user = {
                    name: options.tag,
                    id: options.id,
                    created: moment(options.createdAt).format("LL"),
                    status: options.presence.status === "offline" ? "O usuário está offline." : `O usuário está ${object[options.presence.status]}, conectado pelo ${object[Object.keys(user.presence.clientStatus)[0]]}.`
                }

                this
                .setDescription(`\`${user.name} (ID ${user.id})\` entrou para o discord no dia ${user.created}. ${user.status}`)
                return this
            break
        }
    }
}
