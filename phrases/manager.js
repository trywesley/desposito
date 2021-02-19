module.exports = function getPhrase(dir, value = undefined) {
    const category = dir.split("#")[0]
    const routes = dir.split("#")[1].split(".")

    const reference = resolveValue(value)         
    let saveValue = require("./" + category)
    routes.forEach(rout => {
        saveValue = saveValue[rout]
    })

    const regex = /{(\w+)}/g
    if(reference) {
        const matches = saveValue.match(regex)
        matches.forEach(m => { 
            const value = reference[m.replace(/[{}]/g, "")]
            saveValue = saveValue.replace(m, v)
        })
    }
    return saveValue 
}

function resolveValue(value) {
     if(!value || typeof value === "object") return value 

     const obj = {}
     obj.reference = value
     return obj 
}
