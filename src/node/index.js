export function defineNode(type) {
  const {graph, label} = type
  const {adapter} = graph
  const {node: delegate} = adapter
  const Base = class {
    static get type () { return type }
    static get label () { return label }
    static get adapter() { return adapter }

    static async get (id) { return delegate.get(type, id) }
    static async create (attributes) { return delegate.create(type, attributes) }
    static async all () { return delegate.all(type) }
    static async count () { return delegate.count(type) }

    constructor (attributes={}) {
      this._id = null
      this._attributes = attributes
    }

    get id () { return this._id }
    get isSaved () { return !!this._id }
    get type () { return type }
    get label () { return type.label }
    get attributes () { return this._attributes }
    get adapter () { return adapter }

    set id (val) { return this._id = val }

    async save () { return delegate.save(this) }
    async update () { return delegate.update(this) }
    async destroy () { return delegate.destroy(this) }
  }
  return Base
}

