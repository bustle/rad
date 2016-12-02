export default class EdgeType {
  constructor (graph, fromType, toType, label) {
    this._graph = graph
    this._fromType = fromType
    this._toType = toType
    this._label = label
  }

  get graph () { return this._graph }
  get from () { return this.graph.nodeTypes[this._fromType] }
  get to () { return this.graph.nodeTypes[this._toType] }
  get label () { return this._label }
}
