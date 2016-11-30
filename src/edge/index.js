export default class Edge {
  constructor({ type }) {
    this._type = type
  }

  get type() { return this._type }
  get adapter() { return this.type.graph.adapter }

  async get() { return this.adapter.edge.get(this) }
  async range() { return this.adapter.edge.range(this) }
  async count() { return this.adapter.edge.count(this) }
  async set() { return this.adapter.edge.set(this) }
  async destroy() { debugger; return this.adapter.edge.destroy(this) }
}
