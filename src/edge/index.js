export class EdgeType {
  constructor(label) {
    this._label = label
  }

  get label() { return this._label }
}

export class Edge {
  constructor({ type }) {
    this._type = type
  }

  get type() { return this._type }
}
