import { AdapterBase } from '../adapter'

export default class Node {
  constructor (type, attributes={}) {
    this._id = null
    this._type = type
    this._attributes = attributes
  }

  static get adapter() {
    const {_adapter, type} = this
    if(!_adapter && type) {
      this.adapter = type.graph.adapter
    } else if (!_adapter && !type) {
      this.adapter = new AdapterBase()
    }
    return this._adapter
  }
  static set adapter(val) { this._adapter = val }

  static async get (id) { return this.adapter.node.get(this.type, id) }
  static async create (attributes) {
    return this.adapter.node.create(this.type, attributes)
  }
  static async all () { return this.adapter.node.all(this.type, this) }
  static async count () { return this.adapter.node.count(this.type) }

  get id () { return this._id }
  get isSaved () { return !!this._id }
  get type () { return this._type }
  get label () { return this.type.label }
  get attributes () { return this._attributes }
  get adapter () { return this.type.graph.adapter }

  set id (val) { return this._id = val }

  async save () { return this.adapter.node.save(this) }
  async update () { return this.adapter.node.update(this) }
  async destroy () { return this.adapter.node.destroy(this) }
}

