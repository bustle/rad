export function defineEdge(type) {
  const {graph, label} = type
  const {adapter} = graph
  const {edge: delegate} = adapter
  const Base = class {
    static get type () { return type }
    static get label () { return label }
    static get adapter() { return adapter }

    static async get (id) { return delegate.get(type, id) }
    static async range () { return delegate.range(type) }
    static async get (id) { return delegate.get(type, id) }
    static async count () { return delegate.count(type) }

    constructor(from, to) {
      this._from = from
      this._to = to
    }

    get id() { return this._id }
    get type () { return type }
    get adapter () { return adapter }
    get from () { return this._from }
    get to () { return this._to }

    set id (val) { return this._id = val }

    async connect () { return delegate.connect(this) }
    async disconnect () { return delegate.disconnect(this) }
  }
  return Base
}
