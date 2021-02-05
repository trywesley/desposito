module.exports = (ind, reference) => {
    const messages = new Object()
    if(ind.startsWith("general")) {
        messages.general = {
            "no_user": "O usuário especificado é inválido."
        }
    }

    if(ind.startsWith("math")) {
        messages.math = {
            "congrats": `> 🥸 Tabuada!\n> Acerte o máximo possível e ganhe absolutamente nada.\n\n**${reference.stage}**: Parabéns você acertou! Mas quanto é **${reference.one}x${reference.two}**?`,
            "first": `> 🥸 Tabuada!\n> Acerte o máximo possível e ganhe absolutamente nada.\n\n**${reference.stage}**: Quanto é: **${reference.one}x${reference.two}**?`,
            "fail": `:exploding_head: Woops! O correto era **${reference.correctResult}**, você acertou **${reference.acerts}** vezes. O seu recorde é de **${reference.record}** acertos, boa sorte na próxima.`,
            "timeout": `:clock1230: O tempo acabou! O correto era **${reference.correctResult}**, você acertou **${reference.acerts}** vezes. O seu recorde é de **${reference.record}** acertos, boa sorte na próxima.`
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
                description: "Exercite o seu cérebro com alguns simples cálculos matemáticos.",
                usage: "desposito math"
            },
            eval: {
                description: "É apenas para os desenvolvedores, então vaza!",
                usage: "desposito eval <argument>"
            },
            user: {
                description: "Consulte informações sobre um usuário.",
                usage: "desposito user <user|id>"
            }
        }
    }

    const propArray = ind.split(".")
    return propArray[2] ? messages[propArray[0]][propArray[1]][propArray[2]] : messages[propArray[0]][propArray[1]] 
}
