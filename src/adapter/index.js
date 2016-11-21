export default class Adapter {
  constructor(name, { node, guid }) {
    this._name = name
    this._guid = guid
    this._node = node
    // this.edge = edge
  }

  get name() { return this._name }
  get guid() { return this._guid }
  get node() { return this._node }
  get edge() { return this._edge }
}
