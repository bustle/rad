export class AdapterBase {
  constructor({name='Base', node=NodeDelegate, edge=EdgeDelegate}={}) {
    this._name = name
    this._node = node
    this._edge = edge
  }

  get name() { return this._name }
  get node() { return this._node }
  get edge() { return this._edge }
}

class NodeDelegate {
  static async save() { return }
}

class EdgeDelegate {
  static async save() { return }
}
