export default class Node {
  constructor(type, attributes) {
    this._id = null
    this._type = type
    this._attributes = attributes
  }

  get isSaved() { return !!this._id }
  get type() { return this._type }
  get attributes() { return this._attributes }
  get adapter() { return this.type.graph.adapter }

  set id(val) { return this._id = val }

  async save() { debugger; return this.adapter.node.save(this) }
  async create() { return this.adapter.node.create(this) }
  async update() { return this.adapter.node.update(this) }
  async put() { return this.adapter.node.put(this) }
  async get() { return this.adapter.node.get(this) }
  async all() { return this.adapter.node.all(this) }
  async count() { return this.adapter.node.count(this) }
  async destroy() { return this.adapter.node.destroy(this) }
}

