const util = require('util')
module.exports = {
    aliase: "e ev",
    countdown: 0,
    requireAcessPass: true,

    async open(data, desposito)  {
        let content = data.message.content
        const reg = /<@!?(\d{16,18})>/g
        content = content.replace(reg, 'desposito.users.cache.get("$1")')
        this.execute(desposito, data, content.split(" ").slice(2).join(" "))
    },

    async execute (desposito, data, code)  {
        let result
        try {
            const evaled = await eval(code)
            result = util.inspect(evaled, { compact: true, depth: 0 });
        } catch (error) {
            result = error.toString()
        }
        
        data.message.channel.send(result, {code: 'js'})
    }
}
