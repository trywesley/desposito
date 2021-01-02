module.exports = {
    aliase: "tabuada m",
    async open(data, desposito) {

        let correct = 0
        let maths

        function regenerate() {
            maths = {"one": Math.floor(Math.random() * (10-2) + 2), "two": Math.floor(Math.random() * (10-2) + 2)}
            maths.result = maths.one * maths.two
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
                    message.desdit("math.fail", correct)
                    colected.delete()
                }
             })
             collector.on("end", (col, reason) => {
                 if(reason === "time") {
                     message.desdit("math.timeout", correct)
                 }
             })
        }

        regenerate()
        const message = await data.message.desply("math.first", maths)
    }
}
