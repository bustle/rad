export default class NodeType {
  constructor (graph, label) {
    this._graph = graph
    this._label = label
  }

  get graph () { return this._graph }
  get label () { return this._label }

  hasOne (toType) {
    const graph = this.graph
    const fromType = this.label
    const label = `${fromType}:HAS_ONE:${toType}`
    return graph.defineEdge(fromType, toType, label)
  }
}
