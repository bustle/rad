export default class {

  // Adapter
  static get adapter () {
    return this._adapter || (this.adapter = require('./../adapter/memory'))
  }

  static set adapter (val) {
    return this._adapter = val
  }

  // ID ops
  static last () {
    return this.adapter.guid.last(...arguments)
  }

  static next () {
    return this.adapter.guid.next(...arguments)
  }
}
