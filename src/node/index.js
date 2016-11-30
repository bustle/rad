export default class Node {
  constructor({ type, attributes }) {
    this._id = null
    this._type = type
    this._attributes = attributes
  }

  get isSaved() { return !!this._id }
  get type() { return this._type }
  get attributes() { return this._attributes }
  get adapter() { return this.type.graph.adapter }

  async save() {
    return this.adapter.Node.save()
  }
}

