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
  static async save(node) {}
  static async create(node) {}
  static async update(node) {}
  static async put(node) {}
  static async putByKey(node) {}
  static async get(node) {}
  static async getByKey(node) {}
  static async all(node) {}
  static async count(node) {}
  static async destroy(node) {}
}

class EdgeDelegate {
  static async get(edge) {}
  static async range(edge) {}
  static async count(edge) {}
  static async set(edge) {}
  static async destroy(edge) {}
}
