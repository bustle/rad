export default class EdgeType {
  constructor({ graph, from, to, label }) {
    this._graph = graph
    this._from = from
    this._to = to
    this._label = label
  }

  get graph() { return this._graph }
  get from() { return this._from }
  get to() { return this._to }
  get label() { return this._label }
}

