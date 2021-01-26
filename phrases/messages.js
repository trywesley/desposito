module.exports = (ind, reference) => {
    const messages = new Object()
        
    if(ind.startsWith("math")) {
        messages.math = {
            "congrats": `> 🥸 Tabuada!\n> Acerte o máximo possível e ganhe absolutamente nada.\n\nParabéns você acertou! Mas quanto é **${reference.one}x${reference.two}**?`,
            "first": `> 🥸 Tabuada!\n> Acerte o máximo possível e ganhe absolutamente nada.\n\nQuanto é: **${reference.one}x${reference.two}**?`,
            "fail": `:exploding_head: Woops! Você acertou **${reference}** vezes, boa sorte na próxima.`,
            "timeout": `:clock1230: O tempo acabou! Você acertou **${reference}** vezes, boa sorte na próxima.`
        }
    } 

    if(ind.startsWith("perm")) {
        messages.perm = {
            "missing": `Permissões \`${reference.join(" | ")}\` em falta.`
        }
    }

    if(ind.startsWith("commands")) {
        messages.commands = {
            math: {
                description: "teste",
                usage: "t3ste2"
            }
        }
    }

    const propArray = ind.split(".")
    return propArray[1] ? messages[propArray[0]][propArray[1]] : messages[propArray[0]][propArray[1]][propArray[2]]
}
