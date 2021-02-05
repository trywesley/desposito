require('dotenv').config()

const DespositoClient = require("./utils/discord/DespositoClient")
const desposito = new DespositoClient("ODA3MzE1Njc3OTkyMDU4OTEx.YB2ppQ.yo9pR5outoYIvC83LGu9k400OcQ")

require("./strc/handlers/command")(desposito)
require("./strc/handlers/event")(desposito)
