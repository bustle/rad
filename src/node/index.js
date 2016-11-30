export default class Node {
  constructor({ type, attributes, adapter }) {
    this._id = null
    this._type = type
    this._attributes = attributes
  }

  get isSaved() { return !!this._id }
  get type() { return this._type }
  get attributes() { return this._attributes }
  get adapter() { return this.type.graph.adapter }

  async save() { return this.adapter.node.save(this) }
  async create() { return this.adapter.node.create(this) }
  async update() { return this.adapter.node.update(this) }
  async put() { return this.adapter.node.put(this) }
  async putByKey() { return this.adapter.node.putByKey(this) }
  async get() { return this.adapter.node.get(this) }
  async getByKey() { return this.adapter.node.getByKey(this) }
  async all() { return this.adapter.node.all(this) }
  async count() { return this.adapter.node.count(this) }
  async destroy() { return this.adapter.node.destroy(this) }
}

