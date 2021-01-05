module.exports = (ind, reference) => {
    const messages = {
        math: {
            "congrats": `> 🥸 Tabuada!\n> Acerte o máximo possível e ganhe absolutamente nada.\n\nParabéns você acertou! Mas quanto é **${reference.one}x${reference.two}**?`,
            "first": `> 🥸 Tabuada!\n> Acerte o máximo possível e ganhe absolutamente nada.\n\nQuanto é: **${reference.one}x${reference.two}**?`,
            "fail": `:exploding_head: Woops! Você acertou **${reference}** vezes, boa sorte na próxima.`,
            "timeout": `:clock1230: O tempo acabou! Você acertou **${reference}** vezes, boa sorte na próxima.`
        },
        perm: {
            "missing": `Permissões \`${reference.join(" | ")}\` em falta.`
        }
    }

    const propArray = ind.split(".")
    return propArray[1] ? messages[propArray[0]][propArray[1]] : messages[propArray[0]]
}
