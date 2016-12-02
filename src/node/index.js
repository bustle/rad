import { AdapterBase } from '../adapter'

export default class Node {
  constructor (type, attributes={}) {
    this._id = null
    this._type = type
    this._attributes = attributes
  }

  static get adapter() { return this._adapter || this.type.graph.adapter }
  static set adapter(val) { this._adapter = val }

  static async get (id) { return this.adapter.node.get(id) }
  static async create (attributes) {
    const node = new this(attributes)
    return this.adapter.node.create(node)
  }
  static async all () { return this.adapter.node.all() }
  static async count () { return this.adapter.node.count(this) }

  get id () { return this._id }
  get isSaved () { return !!this._id }
  get type () { return this._type }
  get typeLabel () { return this.type.label }
  get attributes () { return this._attributes }
  get adapter () { return this.type.graph.adapter }

  set id (val) { return this._id = val }

  async save () { return this.adapter.node.save(this) }
  async update () { return this.adapter.node.update(this) }
  async destroy () { return this.adapter.node.destroy(this) }
}

