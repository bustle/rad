export default class Edge {
  constructor (type, from, to) {
    this._id = null
    this._type = type
    this._from = from
    this._to = to
  }

  static get adapter() { return this._adapter || this.type.graph.adapter }
  static set adapter(val) { this._adapter = val }

  static async get (id) { return this.adapter.edge.get(id) }
  static async range () { return this.adapter.edge.range(this) }
  static async get (id) { return this.adapter.edge.get(id) }
  static async count () { return this.adapter.edge.count(this) }

  get type () { return this._type }
  get adapter () { return this.type.graph.adapter }
  get from () { return this._from }
  get to () { return this._to }

  set id (val) { return this._id = val }

  async connect () { return this.adapter.edge.connect(this) }
  async disconnect () { return this.adapter.edge.disconnect(this) }
}
