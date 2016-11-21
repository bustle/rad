import Promise from  'bluebird'

export default class {

  // Adapter
  static get adapter() {
    return this._adapter || (this.adapter = require('./adapter/memory'))
  }

  static set adapter(val) { return this._adapter = val }


  // Crud
  static create() {
    return this.adapter.node.create(...arguments)
  }

  static find() {
    return this.adapter.node.find(...arguments)
  }

  static save() {
    return this.adapter.node.save(...arguments)
  }

  static delete() {
    return this.adapter.node.delete(...arguments)
  }


  // Edges
  static connect() {
    return Promise.reject()
  }

  static disconnect() {
    return Promise.reject()
  }
}
