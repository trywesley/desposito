module.exports = (ind, reference) => {
    const messages = new Object()
    if(ind.startsWith("general")) {
        messages.general = {
            "no_user": "O usuário especificado é inválido."
        }
    }

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
                description: "Exercite o seu cérebro com alguns simples cálculos matemáticos.",
                usage: "desposito math"
            },
            eval: {
                description: "É apenas para os desenvolvedores, vaza!",
                usage: "desposito eval <argument>"
            }
        }
    }

    const propArray = ind.split(".")
    return propArray[2] ? messages[propArray[0]][propArray[1]][propArray[2]] : messages[propArray[0]][propArray[1]] 
}
