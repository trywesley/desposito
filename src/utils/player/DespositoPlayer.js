const Play = require("../../strc/music/play")
const Stop = require("../../strc/music/util/stop")
const Dispatcher = require("../../utils/player/DespositoDispatcher")

class DespositoPlayer {
    constructor(obj, song) {
        this.guild = obj.guild
        this.textChannel = obj.textChannel
        this.voiceChannel = obj.voiceChannel
        this.connection = obj.connection
        this._firstRequester = obj.firstRequester
        this.queue = obj.queue
        this.dispatcher = new Dispatcher()
        
        this.queue.songs = []
        this.queue.songs.push(song)
    }

    play(message, song, desposito, vol) {
        Play(message, song, desposito, vol)
    }

    stop(desposito) {
        Stop(this, desposito)
    }

    setDispatcher(dispatcher) {
        this.dispatcher = dispatcher
    }
}

module.exports = DespositoPlayer