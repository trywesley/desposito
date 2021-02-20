module.exports = function userMentionResolve(message, desposito, options) {
    options.self = options.self ? options.self : true
    options.size = options.size ? options.size : 1
    options.duplicated = options.duplicated ? options.duplicated : false

    const usersArray = message.arguments.slice(0, options.size)
    .map(id => id.replace(/[<!@>]/g, ""))
    .map(id => desposito.users.cache.get(id))
    .filter(value => value)

    if(usersArray.length < options.size) {
        usersArray.push(message.author)
    }

    const hasSelfMention = usersArray.some(u => u.id === message.author.id)

    if(usersArray.length < options.size) {
        return null
    } else if(new Set(usersArray).size !== usersArray.length) {
        if(!options.duplicated) return null
    } else if(hasSelfMention) {
        if(!options.self) return null
    }

    return usersArray
}
