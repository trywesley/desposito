module.exports = class DatabaseQuery {
    constructor(database) {
        this.database = database
    }

    async get(arg) {
      const ref = await this.database.ref(arg)
      const snap = await ref.once('value')
      const result = await snap.val()
      return result
    }

    update(arg, obj) {
        this.database.ref(arg).update(obj)
        return "updated"
    }
}

