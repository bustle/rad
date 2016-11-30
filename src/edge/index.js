export default class Edge {
  constructor({ type }) {
    this._type = type
  }

  get type() { return this._type }
}
