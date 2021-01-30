module.exports = {
    aliase: "tabuada m",
    countdown: 10,
    clientPermissions: ["MANAGE_MESSAGES"],
    async open(data, desposito) {

        let correct = 0
        let maths

        function regenerate() {
            maths = {"one": Math.floor(Math.random() * (10-2) + 2), "two": Math.floor(Math.random() * (10-2) + 2)}
            maths.result = maths.one * maths.two
            maths.stage = String(correct + 1)
            runCollector()
        }

        const filter = u => u.author.id === data.message.author.id
        async function runCollector() {
            const collector = data.message.channel.createMessageCollector(filter, {max: 1, time: 10000})
            collector.on("collect", async (colected) => {
                if(colected.content == maths.result) {
                    correct += 1
                    regenerate()
                    colected.delete()
                    message.desdit("math.congrats", maths)
                } else {
                    let userRecord = await desposito.database.get("Desposito/Users/" + data.message.author.id + "/math_record")
                    if(userRecord && userRecord < correct || !userRecord) {
                        desposito.database.update("Desposito/Users/" + data.message.author.id, { math_record: correct })
                        userRecord = correct
                    } 

                    message.desdit("math.fail", {
                        acerts: correct,
                        record: userRecord
                    })
                    colected.delete()
                }
             })
             collector.on("end", async (col, reason) => {
                 if(reason === "time") {
                     let userRecord = await desposito.database.get("Desposito/Users/" + data.message.author.id + "/math_record")
                     if(userRecord && userRecord < correct || !userRecord) {
                         desposito.database.update("Desposito/Users/" + data.message.author.id, { math_record: correct })
                         userRecord = correct
                     } 

                     message.desdit("math.timeout", {
                        acerts: correct,
                        record: userRecord
                    })
                 }
             })
        }

        regenerate()
        const message = await data.message.desply("math.first", maths)
    }
}
