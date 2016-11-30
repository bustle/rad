export default class EdgeType {
  constructor({ from, to, label }) {
    this._from = from
    this._to = to
    this._label = label
  }

  get from() { return this._from }
  get to() { return this._to }
  get label() { return this._label }
}

