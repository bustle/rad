export class Node {
  constructor({ type, attributes }) {
    this._type = type
    this._attributes = attributes
  }

  get type() { return this._type }
  get attributes() { return this._attributes }
}

export class NodeType {
  constructor(name) {
    this._name = name
  }

  get name() { return this._name }

  hasMany(label, type=null) {

  }

  async create(attributes) {
    return new Node(this, attributes)
  }
}
