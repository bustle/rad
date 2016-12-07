let GUID = 0

export class AdapterBase {
  constructor (name = 'Base', node = NodeDelegate, edge = EdgeDelegate) {
    this._name = name
    this._node = new node(this)
    this._edge = new edge(this)
  }

  get name () { return this._name }
  get node () { return this._node }
  get edge () { return this._edge }
}

export class NodeDelegate {
  constructor(adapter) {
    this._adapter = adapter
  }
  async save () {}
  async create () {}
  async update () {}
  async put () {}
  async get () {}
  async all () {}
  async count () {}
  async destroy () {}
}

export class EdgeDelegate {
  constructor(adapter) {
    this._adapter = adapter
  }

  async get () {}
  async range () {}
  async count () {}
  async connect() {}
  async disconnect() {}
}
