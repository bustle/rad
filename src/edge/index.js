export default class Edge {
  constructor({ type }) {
    this._type = type
  }

  get type() { return this._type }

  async get() { return this.adapter.edge.get(this) }
  async range() { return this.adapter.edge.range(this) }
  async count() { return this.adapter.edge.count(this) }
  async set() { return this.adapter.edge.set(this) }
  async destroy() { return this.adapter.edge.destroy(this) }
}
