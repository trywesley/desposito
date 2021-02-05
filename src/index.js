require('dotenv').config()

const DespositoClient = require("./utils/discord/DespositoClient")
const desposito = new DespositoClient(process.env.TOKEN)

require("./strc/handlers/command")(desposito)
require("./strc/handlers/event")(desposito)
