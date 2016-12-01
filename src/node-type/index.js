import EdgeType from '../edge-type'

export default class NodeType {
  constructor(graph, name) {
    this._graph = graph
    this._name = name
  }

  get graph() { return this._graph }
  get name() { return this._name }

  hasOne(toType) {
    const graph = this.graph
    const fromType = this.name
    const label = `${fromType}${toType}`
    return graph.defineEdge(fromType, toType, label)
  }
}
