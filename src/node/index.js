import { Edge } from '../edge'

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

  hasMany(name, { as: to }) {
    const from = this
    const label = `${from.name}${to.name}s`
    return new EdgeType({from, to, label})
  }
}
